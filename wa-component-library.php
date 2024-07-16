<?php

/**
 * Plugin Name: WebAppick Component Library
 * Plugin URI: 
 * Description: Component Library For WebAppick Products.
 * Version: 1.0.0
 * Author: WebAppick
 * Text Domain: wacl
 */

// Ensure the code is only run if WordPress is loaded.
if (!defined('ABSPATH')) {
  exit;
}

function wacl_menu_page() {
  add_menu_page(
    'WebAppick Component Library',
    'WA Components',
    'manage_options',
    'wacl-component-library',
    'wacl_main_menu_content',
    'dashicons-admin-generic'
  );
}
add_action('admin_menu', 'wacl_menu_page');

function wacl_main_menu_content() {
?>
  <div id="wacl-root"></div>
<?php
}

function wacl_enqueue_scripts() {
  $admin_page = \get_current_screen();
  if (!\is_null($admin_page) && 'toplevel_page_wacl-component-library' === $admin_page->id) {
    wp_enqueue_script(
      'wacl-react-script',
      plugin_dir_url(__FILE__) . 'build/index.js',
      ['wp-element'],
      filemtime(plugin_dir_path(__FILE__) . 'build/index.js'),
      true
    );

    wp_enqueue_style(
      'wacl-tailwind-css',
      plugin_dir_url(__FILE__) . 'styles/output.css',
      [],
      filemtime(plugin_dir_path(__FILE__) . 'styles/output.css')
    );
  }
}
add_action('admin_enqueue_scripts', 'wacl_enqueue_scripts');
