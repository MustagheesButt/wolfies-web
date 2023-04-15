<?php

// ini_set('display_errors', 1);
// ini_set('display_startup_errors', 1);
// error_reporting(E_ALL);

add_theme_support('post-thumbnails');

function get_services()
{
  $products = wc_get_products([]);
  $products = array_map(function ($p) {
    $x = $p->get_data();
    if ($p->is_type('variable')) {
      $x["variations"] = $p->get_available_variations();

      foreach ($x["variations"] as $key => $variation) {
        $subject = $variation["attributes"]["attribute_pa_subject"];
        $x["variations"][$key]["display_name"] = get_term_by('slug', $subject, 'pa_subject')->name;
      }
    }

    return $x;
  }, $products);

  return $products;
}

// https://rudrastyh.com/woocommerce/create-orders-programmatically.html
function create_unpaid_order(WP_REST_Request $request)
{
  $address = [
    'first_name' => $request->get_param('firstname'),
    'last_name'  => $request->get_param('lastname'),
    'email'      => $request->get_param('email'),
    'phone'      => $request->get_param('phone'),
    'city'       => $request->get_param('city'),
    'state'      => $request->get_param('state'),
    'country'    => $request->get_param('country')
  ];

  $service_id = $request->get_param('service'); // this is the product
  $subject_id = $request->get_param('subject'); // this is the variation
  $pages = $request->get_param('pages');
  $course_code = $request->get_param('coursecode');
  $deadline = $request->get_param('deadline');
  $description = $request->get_param('description');

  $order = wc_create_order();

  $product = get_product($service_id);
  if (!empty($subject_id)) {
    $product = get_product($subject_id);
  }

  $order->add_product($product, 1);
  $order->set_address($address, 'billing');
  $order->add_order_note(
    $description .
    "\nCourse Code: " . $course_code .
    "\nPages: " . $pages .
    "\nDeadline: " . $deadline
  , false);

  // $pages is supposed to be number, but in PHP u can do math operation on string
  // so no need to type cast
  $pages_cost = get_pages_cost($pages);
  $order->add_item($pages_cost);

  $order->calculate_totals();
  // $order->set_status( 'wc-processing' ); // cannot edit order afterwards

  $order->save();

  pending_new_order_notification( $order->get_id() );

  return $order;

  // $order->update_status("Completed", 'Imported order', TRUE);
}

function get_countries()
{
  return wc()->countries->get_allowed_countries();
}

function new_request()
{
  wp_mail();
  return "sent";
}

add_action('rest_api_init', function () {
  add_action('rest_pre_serve_request', function () {
    header('Access-Control-Allow-Headers: Authorization, Content-Type, X-WP-Wpml-Language', true);
    header("Access-Control-Allow-Origin: *");
  });

  register_rest_route('wolfie', 'services', [
    'methods' => 'GET',
    'callback' => 'get_services'
  ]);

  register_rest_route('wolfie', 'create-unpaid-order', [
    'methods' => 'POST',
    'callback' => 'create_unpaid_order'
  ]);

  register_rest_route('wolfie', 'new-request', [
    'methods' => 'POST',
    'callback' => 'new_request'
  ]);

  register_rest_route('wolfie', 'get-countries', [
    'methods' => 'GET',
    'callback' => 'get_countries'
  ]);
});

// add_action( 'woocommerce_checkout_order_processed', 'pending_new_order_notification', 20, 1 );
// above hook don't work for our use case, so we directly call it in `create_unpaid_order`
function pending_new_order_notification( $order_id ) {
    // Get an instance of the WC_Order object
    $order = wc_get_order( $order_id );

    // Only for "pending" order status
    if( ! $order->has_status( 'pending' ) ) return;

    // Get an instance of the WC_Email_New_Order object
    $wc_email = WC()->mailer()->get_emails()['WC_Email_New_Order'];

    ## -- Customizing Heading, subject (and optionally add recipients)  -- ##
    // Change Subject
    $wc_email->settings['subject'] = __('{site_title} - New customer Pending order ({order_number}) - {order_date}');

    // Change Heading
    // $wc_email->settings['heading'] = __('New customer Pending Order'); 
    // $wc_email->settings['recipient'] .= ',name@email.com'; // Add email recipients (coma separated)

    // Send "New Email" notification (to admin)
    $wc_email->trigger( $order_id );
}

// Helpers
function get_pages_cost($pages)
{
  $item_fee = new WC_Order_Item_Fee();
  $PER_PAGE = 10;
  $total = $PER_PAGE * $pages;

  $item_fee->set_name( "Per Page Cost" ); // Generic fee name
  $item_fee->set_amount( $total ); // Fee amount
  // $item_fee->set_tax_class( '' ); // default for ''
  // $item_fee->set_tax_status( 'taxable' ); // or 'none'
  $item_fee->set_total( $total ); // Fee amount

  // Calculating Fee taxes
  // $item_fee->calculate_taxes( $calculate_tax_for );

  return $item_fee;
}