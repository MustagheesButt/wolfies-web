<?php

add_theme_support('post-thumbnails');

function get_services()
{
  $products = wc_get_products([]);
  $products = array_map(function ($p) {
    return $p->get_data();
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

  $service_id = $request->get_param('service_id');

  $order = wc_create_order();

  $product = get_product($service_id);
  $order->add_product($product, 1);
  $order->set_address($address, 'billing');

  $order->calculate_totals();
  // $order->update_status("Completed", 'Imported order', TRUE);
}

add_action('rest_api_init', function () {
  register_rest_route('wolfie', 'services', [
    'methods' => 'GET',
    'callback' => 'get_services'
  ]);

  register_rest_route('wolfie', 'create-unpaid-order', [
    'methods' => 'POST',
    'callback' => 'create_unpaid_order'
  ]);
});
