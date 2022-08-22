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
    if ($p->is_type('variable'))
    {
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

function create_unpaid_order(WP_REST_Request $request)
{
  $address = [
    'first_name' => $request->get_param('first_name'),
    'last_name'  => $request->get_param('last_name'),
    'email'      => $request->get_param('email'),
    'phone'      => $request->get_param('phone'),
    'city'       => $request->get_param('city'),
    'state'      => $request->get_param('state'),
    'country'    => $request->get_param('country')
  ];

  $service_id = $request->get_param('service_id'); // this is the product
  $subject_id = $request->get_param('subject_id'); // this is the variation

  $order = wc_create_order();

  $product = get_product($service_id);
  $order->add_product($product, 1, $subject_id);
  $order->set_address($address, 'billing');

  $order->calculate_totals();
  // $order->update_status("Completed", 'Imported order', TRUE);
}

function get_countries() {
  return wc()->countries->get_allowed_countries();
}

// function add_cors_http_header(){
//   header("Access-Control-Allow-Origin: *");
// }
// add_action('init','add_cors_http_header');

add_action('rest_api_init', function () {
  register_rest_route('wolfie', 'services', [
    'methods' => 'GET',
    'callback' => 'get_services'
  ]);

  register_rest_route('wolfie', 'create-unpaid-order', [
    'methods' => 'POST',
    'callback' => 'create_unpaid_order'
  ]);

  register_rest_route('wolfie', 'get-countries', [
    'methods' => 'GET',
    'callback' => 'get_countries'
  ]);
});
