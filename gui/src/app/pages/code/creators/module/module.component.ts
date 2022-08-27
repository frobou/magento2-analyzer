import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.scss']
})
export class ModuleComponent implements OnInit {
  module: any = {};

  constructor() { }

  ngOnInit(): void {
    this.module.types = 'const MODULE = \'module\';\n' +
      'const LIBRARY = \'library\';\n' +
      'const THEME = \'theme\';\n' +
      'const LANGUAGE = \'language\';\n' +
      'const SETUP = \'setup\';';
    this.module.module_xml = `<?xml version="1.0"?>
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:noNamespaceSchemaLocation="urn:magento:framework:Module/etc/module.xsd">
    <module name="Vendor_Customer"/>
</config>`;
    this.module.registration_php = `<?php

use Magento\\Framework\\Component\\ComponentRegistrar;

ComponentRegistrar::register(ComponentRegistrar::MODULE, 'Vendor_Customer', __DIR__);
`;
    this.module.composer_json = `{
  "name": "vendor/module-customer",
  "version": "1.0.0",
  "description": "N/A",
  "type": "magento2-module",
  "require": {
    "magento/framework": "*"
  },
  "license": [
    "Proprietary"
  ],
  "autoload": {
    "files": [
      "registration.php"
    ],
    "psr-4": {
      "Vendor\\\\Customer\\\\": ""
    }
  }
}`;
    this.module.module_list = `bin/magento module:status`;
    this.module.module_install = `bin/magento module:enable Vendor_Module`;
  }

}
