const fakePlugins = {
  'plugins': {
    'Magento_Store': [{
      'before': [{
        'active': 1,
        'name': 'beforeSendResponse',
        'className': 'Magento\\Framework\\App\\Response\\HeaderManager',
        'line': 39,
        'file': '\/vendor\/magento\/framework\/App\/Response\/HeaderManager.php',
        'origin': {
          'name': 'sendResponse',
          'className': 'Magento\\Framework\\App\\Response\\Http',
          'line': 37,
          'file': '\/vendor\/magento\/framework\/App\/Response\/Http.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeDispatch',
        'className': 'Magento\\Store\\App\\Action\\Plugin\\StoreCheck',
        'line': 32,
        'file': '\/vendor\/magento\/module-store\/App\/Action\/Plugin\/StoreCheck.php',
        'origin': {
          'name': 'dispatch',
          'className': 'Magento\\Framework\\App\\Action\\AbstractAction',
          'line': 53,
          'file': '\/vendor\/magento\/framework\/App\/Action\/AbstractAction.php'
        }
      }]
    }, {
      'around': [{
        'active': 1,
        'name': 'aroundIsSecure',
        'className': 'Magento\\Store\\Url\\Plugin\\SecurityInfo',
        'line': 38,
        'file': '\/vendor\/magento\/module-store\/Url\/Plugin\/SecurityInfo.php',
        'origin': {
          'name': 'isSecure',
          'className': 'Magento\\Framework\\Url\\SecurityInfo',
          'line': 47,
          'file': '\/vendor\/magento\/framework\/Url\/SecurityInfo.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeSetRouteParams',
        'className': 'Magento\\Store\\Url\\Plugin\\RouteParamsResolver',
        'line': 59,
        'file': '\/vendor\/magento\/module-store\/Url\/Plugin\/RouteParamsResolver.php',
        'origin': {
          'name': 'setRouteParams',
          'className': 'Magento\\Framework\\Url\\RouteParamsResolver',
          'line': 59,
          'file': '\/vendor\/magento\/framework\/Url\/RouteParamsResolver.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeDispatch',
        'className': 'Magento\\Framework\\Module\\Plugin\\DbStatusValidator',
        'line': 50,
        'file': '\/vendor\/magento\/framework\/Module\/Plugin\/DbStatusValidator.php',
        'origin': {
          'name': 'dispatch',
          'className': 'Magento\\Framework\\App\\FrontController',
          'line': 85,
          'file': '\/vendor\/magento\/framework\/App\/FrontController.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeDispatch',
        'className': 'Magento\\Store\\App\\FrontController\\Plugin\\DefaultStore',
        'line': 65,
        'file': '\/vendor\/magento\/module-store\/App\/FrontController\/Plugin\/DefaultStore.php',
        'origin': {
          'name': 'dispatch',
          'className': 'Magento\\Framework\\App\\FrontControllerInterface',
          'line': 24,
          'file': '\/vendor\/magento\/framework\/App\/FrontControllerInterface.php'
        }
      }]
    }, {
      'around': [{
        'active': 1,
        'name': 'aroundDispatch',
        'className': 'Magento\\Store\\App\\FrontController\\Plugin\\RequestPreprocessor',
        'line': 64,
        'file': '\/vendor\/magento\/module-store\/App\/FrontController\/Plugin\/RequestPreprocessor.php',
        'origin': {
          'name': 'dispatch',
          'className': 'Magento\\Framework\\App\\FrontController',
          'line': 85,
          'file': '\/vendor\/magento\/framework\/App\/FrontController.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeDispatch',
        'className': 'Magento\\Store\\App\\Action\\Plugin\\Context',
        'line': 69,
        'file': '\/vendor\/magento\/module-store\/App\/Action\/Plugin\/Context.php',
        'origin': {
          'name': 'dispatch',
          'className': 'Magento\\Framework\\App\\Action\\AbstractAction',
          'line': 53,
          'file': '\/vendor\/magento\/framework\/App\/Action\/AbstractAction.php'
        }
      }]
    }],
    'Magento_Theme': [{
      'after': [{
        'active': 1,
        'name': 'afterGetBaseUrl',
        'className': 'Magento\\Theme\\Model\\Url\\Plugin\\Signature',
        'line': 58,
        'file': '\/vendor\/magento\/module-theme\/Model\/Url\/Plugin\/Signature.php',
        'origin': {
          'name': 'getBaseUrl',
          'className': 'Magento\\Framework\\Url\\ScopeInterface',
          'line': 24,
          'file': '\/vendor\/magento\/framework\/Url\/ScopeInterface.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterSave',
        'className': 'Magento\\Theme\\Model\\Design\\Config\\Plugin',
        'line': 44,
        'file': '\/vendor\/magento\/module-theme\/Model\/Design\/Config\/Plugin.php',
        'origin': {
          'name': 'save',
          'className': 'Magento\\Theme\\Model\\DesignConfigRepository',
          'line': 84,
          'file': '\/vendor\/magento\/module-theme\/Model\/DesignConfigRepository.php'
        }
      }, {
        'active': 1,
        'name': 'afterDelete',
        'className': 'Magento\\Theme\\Model\\Design\\Config\\Plugin',
        'line': 65,
        'file': '\/vendor\/magento\/module-theme\/Model\/Design\/Config\/Plugin.php',
        'origin': {
          'name': 'delete',
          'className': 'Magento\\Theme\\Model\\DesignConfigRepository',
          'line': 106,
          'file': '\/vendor\/magento\/module-theme\/Model\/DesignConfigRepository.php'
        }
      }]
    }, {
      'around': [{
        'active': 1,
        'name': 'aroundSave',
        'className': 'Magento\\Theme\\Model\\Indexer\\Design\\Config\\Plugin\\Website',
        'line': 36,
        'file': '\/vendor\/magento\/module-theme\/Model\/Indexer\/Design\/Config\/Plugin\/Website.php',
        'origin': {
          'name': 'save',
          'className': 'Magento\\Store\\Model\\Website',
          'line': 653,
          'file': '\/vendor\/magento\/module-store\/Model\/Website.php'
        }
      }],
      'after': [{
        'active': 1,
        'name': 'afterDelete',
        'className': 'Magento\\Theme\\Model\\Indexer\\Design\\Config\\Plugin\\Website',
        'line': 55,
        'file': '\/vendor\/magento\/module-theme\/Model\/Indexer\/Design\/Config\/Plugin\/Website.php',
        'origin': {
          'name': 'delete',
          'className': 'Magento\\Store\\Model\\Website',
          'line': 843,
          'file': '\/vendor\/magento\/module-store\/Model\/Website.php'
        }
      }]
    }, {
      'around': [{
        'active': 1,
        'name': 'aroundSave',
        'className': 'Magento\\Theme\\Model\\Indexer\\Design\\Config\\Plugin\\Store',
        'line': 36,
        'file': '\/vendor\/magento\/module-theme\/Model\/Indexer\/Design\/Config\/Plugin\/Store.php',
        'origin': {
          'name': 'save',
          'className': 'Magento\\Store\\Model\\Store',
          'line': 653,
          'file': '\/vendor\/magento\/module-store\/Model\/Store.php'
        }
      }],
      'after': [{
        'active': 1,
        'name': 'afterDelete',
        'className': 'Magento\\Theme\\Model\\Indexer\\Design\\Config\\Plugin\\Store',
        'line': 55,
        'file': '\/vendor\/magento\/module-theme\/Model\/Indexer\/Design\/Config\/Plugin\/Store.php',
        'origin': {
          'name': 'delete',
          'className': 'Magento\\Store\\Model\\Store',
          'line': 843,
          'file': '\/vendor\/magento\/module-store\/Model\/Store.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterDelete',
        'className': 'Magento\\Theme\\Model\\Indexer\\Design\\Config\\Plugin\\StoreGroup',
        'line': 37,
        'file': '\/vendor\/magento\/module-theme\/Model\/Indexer\/Design\/Config\/Plugin\/StoreGroup.php',
        'origin': {
          'name': 'delete',
          'className': 'Magento\\Store\\Model\\Group',
          'line': 843,
          'file': '\/vendor\/magento\/module-store\/Model\/Group.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterGet',
        'className': 'Magento\\Theme\\Model\\Design\\Config\\Plugin\\Dump',
        'line': 56,
        'file': '\/vendor\/magento\/module-theme\/Model\/Design\/Config\/Plugin\/Dump.php',
        'origin': {
          'name': 'get',
          'className': 'Magento\\Config\\App\\Config\\Source\\DumpConfigSourceAggregated',
          'line': 103,
          'file': '\/vendor\/magento\/module-config\/App\/Config\/Source\/DumpConfigSourceAggregated.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeDispatch',
        'className': 'Magento\\Theme\\Model\\Theme\\Plugin\\Registration',
        'line': 78,
        'file': '\/vendor\/magento\/module-theme\/Model\/Theme\/Plugin\/Registration.php',
        'origin': {
          'name': 'dispatch',
          'className': 'Magento\\Backend\\App\\AbstractAction',
          'line': 206,
          'file': '\/vendor\/magento\/module-backend\/App\/AbstractAction.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterRenderResult',
        'className': 'Magento\\Theme\\Controller\\Result\\MessagePlugin',
        'line': 90,
        'file': '\/vendor\/magento\/module-theme\/Controller\/Result\/MessagePlugin.php',
        'origin': {
          'name': 'renderResult',
          'className': 'Magento\\Framework\\Controller\\ResultInterface',
          'line': 46,
          'file': '\/vendor\/magento\/framework\/Controller\/ResultInterface.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeSendResponse',
        'className': 'Magento\\Theme\\Controller\\Result\\JsFooterPlugin',
        'line': 40,
        'file': '\/vendor\/magento\/module-theme\/Controller\/Result\/JsFooterPlugin.php',
        'origin': {
          'name': 'sendResponse',
          'className': 'Magento\\Framework\\App\\Response\\Http',
          'line': 37,
          'file': '\/vendor\/magento\/framework\/App\/Response\/Http.php'
        }
      }]
    }],
    'Magento_Eav': [{
      'around': [{
        'active': 1,
        'name': 'aroundGetStoreLabelsByAttributeId',
        'className': 'Magento\\Eav\\Plugin\\Model\\ResourceModel\\Entity\\Attribute',
        'line': 60,
        'file': '\/vendor\/magento\/module-eav\/Plugin\/Model\/ResourceModel\/Entity\/Attribute.php',
        'origin': {
          'name': 'getStoreLabelsByAttributeId',
          'className': 'Magento\\Eav\\Model\\ResourceModel\\Entity\\Attribute',
          'line': 706,
          'file': '\/vendor\/magento\/module-eav\/Model\/ResourceModel\/Entity\/Attribute.php'
        }
      }]
    }, {
      'around': [{
        'active': 1,
        'name': 'aroundSave',
        'className': 'Magento\\Framework\\App\\Cache\\FlushCacheByTags',
        'line': 67,
        'file': '\/vendor\/magento\/framework\/App\/Cache\/FlushCacheByTags.php',
        'origin': {
          'name': 'save',
          'className': 'Magento\\Eav\\Model\\Entity\\AbstractEntity',
          'line': 1158,
          'file': '\/vendor\/magento\/module-eav\/Model\/Entity\/AbstractEntity.php'
        }
      }, {
        'active': 1,
        'name': 'aroundDelete',
        'className': 'Magento\\Framework\\App\\Cache\\FlushCacheByTags',
        'line': 85,
        'file': '\/vendor\/magento\/framework\/App\/Cache\/FlushCacheByTags.php',
        'origin': {
          'name': 'delete',
          'className': 'Magento\\Eav\\Model\\Entity\\AbstractEntity',
          'line': 1738,
          'file': '\/vendor\/magento\/module-eav\/Model\/Entity\/AbstractEntity.php'
        }
      }]
    }],
    'Magento_AdvancedPricingImportExport': [{
      'after': [{
        'active': 1,
        'name': 'afterSaveAdvancedPricing',
        'className': 'Magento\\AdvancedPricingImportExport\\Model\\Indexer\\Product\\Price\\Plugin\\Import',
        'line': 32,
        'file': '\/vendor\/magento\/module-advanced-pricing-import-export\/Model\/Indexer\/Product\/Price\/Plugin\/Import.php',
        'origin': {
          'name': 'saveAdvancedPricing',
          'className': 'Magento\\AdvancedPricingImportExport\\Model\\Import\\AdvancedPricing',
          'line': 315,
          'file': '\/vendor\/magento\/module-advanced-pricing-import-export\/Model\/Import\/AdvancedPricing.php'
        }
      }, {
        'active': 1,
        'name': 'afterDeleteAdvancedPricing',
        'className': 'Magento\\AdvancedPricingImportExport\\Model\\Indexer\\Product\\Price\\Plugin\\Import',
        'line': 44,
        'file': '\/vendor\/magento\/module-advanced-pricing-import-export\/Model\/Indexer\/Product\/Price\/Plugin\/Import.php',
        'origin': {
          'name': 'deleteAdvancedPricing',
          'className': 'Magento\\AdvancedPricingImportExport\\Model\\Import\\AdvancedPricing',
          'line': 327,
          'file': '\/vendor\/magento\/module-advanced-pricing-import-export\/Model\/Import\/AdvancedPricing.php'
        }
      }]
    }],
    'Magento_Customer': [{
      'around': [{
        'active': 1,
        'name': 'aroundSave',
        'className': 'Magento\\Customer\\Model\\Plugin\\CustomerRepository\\TransactionWrapper',
        'line': 35,
        'file': '\/vendor\/magento\/module-customer\/Model\/Plugin\/CustomerRepository\/TransactionWrapper.php',
        'origin': {
          'name': 'save',
          'className': 'Magento\\Customer\\Api\\CustomerRepositoryInterface',
          'line': 27,
          'file': '\/vendor\/magento\/module-customer\/Api\/CustomerRepositoryInterface.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeGetAllowedCountries',
        'className': 'Magento\\Customer\\Model\\Plugin\\AllowedCountries',
        'line': 50,
        'file': '\/vendor\/magento\/module-customer\/Model\/Plugin\/AllowedCountries.php',
        'origin': {
          'name': 'getAllowedCountries',
          'className': 'Magento\\Directory\\Model\\AllowedCountries',
          'line': 54,
          'file': '\/vendor\/magento\/module-directory\/Model\/AllowedCountries.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeDispatch',
        'className': 'Magento\\Customer\\Model\\Plugin\\CustomerNotification',
        'line': 81,
        'file': '\/vendor\/magento\/module-customer\/Model\/Plugin\/CustomerNotification.php',
        'origin': {
          'name': 'dispatch',
          'className': 'Magento\\Framework\\App\\Action\\AbstractAction',
          'line': 53,
          'file': '\/vendor\/magento\/framework\/App\/Action\/AbstractAction.php'
        }
      }]
    }, {
      'around': [{
        'active': 1,
        'name': 'aroundExecute',
        'className': 'Magento\\Customer\\Model\\Plugin\\CustomerFlushFormKey',
        'line': 43,
        'file': '\/vendor\/magento\/module-customer\/Model\/Plugin\/CustomerFlushFormKey.php',
        'origin': {
          'name': 'execute',
          'className': 'Magento\\PageCache\\Observer\\FlushFormKey',
          'line': 39,
          'file': '\/vendor\/magento\/module-page-cache\/Observer\/FlushFormKey.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeGenerateXml',
        'className': 'Magento\\Customer\\Model\\Layout\\DepersonalizePlugin',
        'line': 79,
        'file': '\/vendor\/magento\/module-customer\/Model\/Layout\/DepersonalizePlugin.php',
        'origin': {
          'name': 'generateXml',
          'className': 'Magento\\Framework\\View\\Layout',
          'line': 301,
          'file': '\/vendor\/magento\/framework\/View\/Layout.php'
        }
      }],
      'after': [{
        'active': 1,
        'name': 'afterGenerateXml',
        'className': 'Magento\\Customer\\Model\\Layout\\DepersonalizePlugin',
        'line': 95,
        'file': '\/vendor\/magento\/module-customer\/Model\/Layout\/DepersonalizePlugin.php',
        'origin': {
          'name': 'generateXml',
          'className': 'Magento\\Framework\\View\\Layout',
          'line': 301,
          'file': '\/vendor\/magento\/framework\/View\/Layout.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeDispatch',
        'className': 'Magento\\Customer\\Model\\App\\Action\\ContextPlugin',
        'line': 49,
        'file': '\/vendor\/magento\/module-customer\/Model\/App\/Action\/ContextPlugin.php',
        'origin': {
          'name': 'dispatch',
          'className': 'Magento\\Framework\\App\\Action\\AbstractAction',
          'line': 53,
          'file': '\/vendor\/magento\/framework\/App\/Action\/AbstractAction.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeDispatch',
        'className': 'Magento\\Customer\\Controller\\Plugin\\Account',
        'line': 46,
        'file': '\/vendor\/magento\/module-customer\/Controller\/Plugin\/Account.php',
        'origin': {
          'name': 'dispatch',
          'className': 'Magento\\Customer\\Controller\\AbstractAccount',
          'line': 92,
          'file': '\/vendor\/magento\/module-customer\/Controller\/AbstractAccount.php'
        }
      }],
      'after': [{
        'active': 1,
        'name': 'afterDispatch',
        'className': 'Magento\\Customer\\Controller\\Plugin\\Account',
        'line': 69,
        'file': '\/vendor\/magento\/module-customer\/Controller\/Plugin\/Account.php',
        'origin': {
          'name': 'dispatch',
          'className': 'Magento\\Customer\\Controller\\AbstractAccount',
          'line': 92,
          'file': '\/vendor\/magento\/module-customer\/Controller\/AbstractAccount.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterGetConfig',
        'className': 'Magento\\Customer\\Model\\Cart\\ConfigPlugin',
        'line': 33,
        'file': '\/vendor\/magento\/module-customer\/Model\/Cart\/ConfigPlugin.php',
        'origin': {
          'name': 'getConfig',
          'className': 'Magento\\Checkout\\Block\\Cart\\Sidebar',
          'line': 75,
          'file': '\/vendor\/magento\/module-checkout\/Block\/Cart\/Sidebar.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeStart',
        'className': 'Magento\\Customer\\CustomerData\\Plugin\\SessionChecker',
        'line': 47,
        'file': '\/vendor\/magento\/module-customer\/CustomerData\/Plugin\/SessionChecker.php',
        'origin': {
          'name': 'start',
          'className': 'Magento\\Framework\\Session\\SessionManagerInterface',
          'line': 28,
          'file': '\/vendor\/magento\/framework\/Session\/SessionManagerInterface.php'
        }
      }]
    }],
    'Magento_Backend': [{
      'around': [{
        'active': 1,
        'name': 'aroundDispatch',
        'className': 'Magento\\Backend\\App\\Action\\Plugin\\Authentication',
        'line': 112,
        'file': '\/vendor\/magento\/module-backend\/App\/Action\/Plugin\/Authentication.php',
        'origin': {
          'name': 'dispatch',
          'className': 'Magento\\Backend\\App\\AbstractAction',
          'line': 206,
          'file': '\/vendor\/magento\/module-backend\/App\/AbstractAction.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterGetResult',
        'className': 'Magento\\Backend\\Model\\Setup\\MenuBuilder',
        'line': 44,
        'file': '\/vendor\/magento\/module-backend\/Model\/Setup\/MenuBuilder.php',
        'origin': {
          'name': 'getResult',
          'className': 'Magento\\Backend\\Model\\Menu\\Builder',
          'line': 57,
          'file': '\/vendor\/magento\/module-backend\/Model\/Menu\/Builder.php'
        }
      }]
    }],
    'Magento_Amqp': [{
      'after': [{
        'active': 0,
        'name': 'afterRead',
        'className': 'Magento\\Framework\\MessageQueue\\Config\\Consumer\\ConfigReaderPlugin',
        'line': 41,
        'file': '\/vendor\/magento\/framework-message-queue\/Config\/Consumer\/ConfigReaderPlugin.php',
        'origin': {
          'name': 'read',
          'className': 'Magento\\Framework\\MessageQueue\\Consumer\\Config\\CompositeReader',
          'line': 45,
          'file': '\/vendor\/magento\/framework-message-queue\/Consumer\/Config\/CompositeReader.php'
        }
      }]
    }, {
      'after': [{
        'active': 0,
        'name': 'afterRead',
        'className': 'Magento\\Framework\\MessageQueue\\Config\\Publisher\\ConfigReaderPlugin',
        'line': 41,
        'file': '\/vendor\/magento\/framework-message-queue\/Config\/Publisher\/ConfigReaderPlugin.php',
        'origin': {
          'name': 'read',
          'className': 'Magento\\Framework\\MessageQueue\\Publisher\\Config\\CompositeReader',
          'line': 57,
          'file': '\/vendor\/magento\/framework-message-queue\/Publisher\/Config\/CompositeReader.php'
        }
      }]
    }, {
      'after': [{
        'active': 0,
        'name': 'afterRead',
        'className': 'Magento\\Framework\\MessageQueue\\Config\\Topology\\ConfigReaderPlugin',
        'line': 42,
        'file': '\/vendor\/magento\/framework-message-queue\/Config\/Topology\/ConfigReaderPlugin.php',
        'origin': {
          'name': 'read',
          'className': 'Magento\\Framework\\MessageQueue\\Topology\\Config\\CompositeReader',
          'line': 47,
          'file': '\/vendor\/magento\/framework-message-queue\/Topology\/Config\/CompositeReader.php'
        }
      }]
    }],
    'Magento_AmqpStore': [{
      'before': [{
        'active': 1,
        'name': 'beforeEnqueue',
        'className': 'Magento\\AmqpStore\\Plugin\\Framework\\Amqp\\Bulk\\Exchange',
        'line': 70,
        'file': '\/vendor\/magento\/module-amqp-store\/Plugin\/Framework\/Amqp\/Bulk\/Exchange.php',
        'origin': {
          'name': 'enqueue',
          'className': 'Magento\\Framework\\Amqp\\Bulk\\Exchange',
          'line': 61,
          'file': '\/vendor\/magento\/framework-amqp\/Bulk\/Exchange.php'
        }
      }]
    }, {
      'around': [{
        'active': 1,
        'name': 'aroundExecute',
        'className': 'Magento\\AmqpStore\\Plugin\\AsynchronousOperations\\MassConsumerEnvelopeCallback',
        'line': 66,
        'file': '\/vendor\/magento\/module-amqp-store\/Plugin\/AsynchronousOperations\/MassConsumerEnvelopeCallback.php',
        'origin': {
          'name': 'execute',
          'className': 'Magento\\AsynchronousOperations\\Model\\MassConsumerEnvelopeCallback',
          'line': 92,
          'file': '\/vendor\/magento\/module-asynchronous-operations\/Model\/MassConsumerEnvelopeCallback.php'
        }
      }]
    }],
    'Magento_User': [{
      'after': [{
        'active': 1,
        'name': 'afterSave',
        'className': 'Magento\\User\\Model\\Plugin\\AuthorizationRole',
        'line': 39,
        'file': '\/vendor\/magento\/module-user\/Model\/Plugin\/AuthorizationRole.php',
        'origin': {
          'name': 'save',
          'className': 'Magento\\Authorization\\Model\\Role',
          'line': 653,
          'file': '\/vendor\/magento\/module-authorization\/Model\/Role.php'
        }
      }]
    }],
    'Magento_Indexer': [{
      'after': [{
        'active': 1,
        'name': 'afterUpdateMview',
        'className': 'Magento\\Indexer\\Model\\Processor\\CleanCache',
        'line': 46,
        'file': '\/vendor\/magento\/module-indexer\/Model\/Processor\/CleanCache.php',
        'origin': {
          'name': 'updateMview',
          'className': 'Magento\\Indexer\\Model\\Processor',
          'line': 102,
          'file': '\/vendor\/magento\/module-indexer\/Model\/Processor.php'
        }
      }, {
        'active': 1,
        'name': 'afterReindexAllInvalid',
        'className': 'Magento\\Indexer\\Model\\Processor\\CleanCache',
        'line': 61,
        'file': '\/vendor\/magento\/module-indexer\/Model\/Processor\/CleanCache.php',
        'origin': {
          'name': 'reindexAllInvalid',
          'className': 'Magento\\Indexer\\Model\\Processor',
          'line': 58,
          'file': '\/vendor\/magento\/module-indexer\/Model\/Processor.php'
        }
      }]
    }],
    'Magento_Cms': [{
      'after': [{
        'active': 1,
        'name': 'afterGetIdentities',
        'className': 'Magento\\Cms\\Model\\Plugin\\Product',
        'line': 38,
        'file': '\/vendor\/magento\/module-cms\/Model\/Plugin\/Product.php',
        'origin': {
          'name': 'getIdentities',
          'className': 'Magento\\Catalog\\Model\\Product',
          'line': 2403,
          'file': '\/vendor\/magento\/module-catalog\/Model\/Product.php'
        }
      }]
    }],
    'Magento_Catalog': [{
      'after': [{
        'active': 1,
        'name': 'afterClean',
        'className': 'Magento\\Catalog\\Model\\Plugin\\Log',
        'line': 35,
        'file': '\/vendor\/magento\/module-catalog\/Model\/Plugin\/Log.php',
        'origin': {
          'name': 'clean',
          'className': 'Magento\\Customer\\Model\\ResourceModel\\Visitor',
          'line': 73,
          'file': '\/vendor\/magento\/module-customer\/Model\/ResourceModel\/Visitor.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeGetHtml',
        'className': 'Magento\\Catalog\\Plugin\\Block\\Topmenu',
        'line': 69,
        'file': '\/vendor\/magento\/module-catalog\/Plugin\/Block\/Topmenu.php',
        'origin': {
          'name': 'getHtml',
          'className': 'Magento\\Theme\\Block\\Html\\Topmenu',
          'line': 85,
          'file': '\/vendor\/magento\/module-theme\/Block\/Html\/Topmenu.php'
        }
      }, {
        'active': 1,
        'name': 'beforeGetIdentities',
        'className': 'Magento\\Catalog\\Plugin\\Block\\Topmenu',
        'line': 117,
        'file': '\/vendor\/magento\/module-catalog\/Plugin\/Block\/Topmenu.php',
        'origin': {
          'name': 'getIdentities',
          'className': 'Magento\\Theme\\Block\\Html\\Topmenu',
          'line': 353,
          'file': '\/vendor\/magento\/module-theme\/Block\/Html\/Topmenu.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterSetStatus',
        'className': 'Magento\\Catalog\\Model\\Indexer\\Category\\Product\\Plugin\\MviewState',
        'line': 51,
        'file': '\/vendor\/magento\/module-catalog\/Model\/Indexer\/Category\/Product\/Plugin\/MviewState.php',
        'origin': {
          'name': 'setStatus',
          'className': 'Magento\\Framework\\Mview\\View\\StateInterface',
          'line': 93,
          'file': '\/vendor\/magento\/framework\/Mview\/View\/StateInterface.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterDelete',
        'className': 'Magento\\Catalog\\Model\\Indexer\\Product\\Price\\Plugin\\Website',
        'line': 69,
        'file': '\/vendor\/magento\/module-catalog\/Model\/Indexer\/Product\/Price\/Plugin\/Website.php',
        'origin': {
          'name': 'delete',
          'className': 'Magento\\Store\\Model\\ResourceModel\\Website',
          'line': 443,
          'file': '\/vendor\/magento\/module-store\/Model\/ResourceModel\/Website.php'
        }
      }, {
        'active': 1,
        'name': 'afterSave',
        'className': 'Magento\\Catalog\\Model\\Indexer\\Product\\Price\\Plugin\\Website',
        'line': 88,
        'file': '\/vendor\/magento\/module-catalog\/Model\/Indexer\/Product\/Price\/Plugin\/Website.php',
        'origin': {
          'name': 'save',
          'className': 'Magento\\Store\\Model\\ResourceModel\\Website',
          'line': 392,
          'file': '\/vendor\/magento\/module-store\/Model\/ResourceModel\/Website.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeSave',
        'className': 'Magento\\Catalog\\Model\\Indexer\\Category\\Flat\\Plugin\\StoreView',
        'line': 60,
        'file': '\/vendor\/magento\/module-catalog\/Model\/Indexer\/Category\/Flat\/Plugin\/StoreView.php',
        'origin': {
          'name': 'save',
          'className': 'Magento\\Store\\Model\\ResourceModel\\Store',
          'line': 392,
          'file': '\/vendor\/magento\/module-store\/Model\/ResourceModel\/Store.php'
        }
      }],
      'after': [{
        'active': 1,
        'name': 'afterSave',
        'className': 'Magento\\Catalog\\Model\\Indexer\\Category\\Flat\\Plugin\\StoreView',
        'line': 74,
        'file': '\/vendor\/magento\/module-catalog\/Model\/Indexer\/Category\/Flat\/Plugin\/StoreView.php',
        'origin': {
          'name': 'save',
          'className': 'Magento\\Store\\Model\\ResourceModel\\Store',
          'line': 392,
          'file': '\/vendor\/magento\/module-store\/Model\/ResourceModel\/Store.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeSave',
        'className': 'Magento\\Catalog\\Model\\Indexer\\Category\\Flat\\Plugin\\StoreGroup',
        'line': 60,
        'file': '\/vendor\/magento\/module-catalog\/Model\/Indexer\/Category\/Flat\/Plugin\/StoreGroup.php',
        'origin': {
          'name': 'save',
          'className': 'Magento\\Store\\Model\\ResourceModel\\Group',
          'line': 392,
          'file': '\/vendor\/magento\/module-store\/Model\/ResourceModel\/Group.php'
        }
      }],
      'after': [{
        'active': 1,
        'name': 'afterSave',
        'className': 'Magento\\Catalog\\Model\\Indexer\\Category\\Flat\\Plugin\\StoreGroup',
        'line': 74,
        'file': '\/vendor\/magento\/module-catalog\/Model\/Indexer\/Category\/Flat\/Plugin\/StoreGroup.php',
        'origin': {
          'name': 'save',
          'className': 'Magento\\Store\\Model\\ResourceModel\\Group',
          'line': 392,
          'file': '\/vendor\/magento\/module-store\/Model\/ResourceModel\/Group.php'
        }
      }]
    }, {
      'around': [{
        'active': 1,
        'name': 'aroundSave',
        'className': 'Magento\\Catalog\\Model\\Indexer\\Product\\Price\\Plugin\\CustomerGroup',
        'line': 78,
        'file': '\/vendor\/magento\/module-catalog\/Model\/Indexer\/Product\/Price\/Plugin\/CustomerGroup.php',
        'origin': {
          'name': 'save',
          'className': 'Magento\\Customer\\Api\\GroupRepositoryInterface',
          'line': 26,
          'file': '\/vendor\/magento\/module-customer\/Api\/GroupRepositoryInterface.php'
        }
      }],
      'after': [{
        'active': 1,
        'name': 'afterDeleteById',
        'className': 'Magento\\Catalog\\Model\\Indexer\\Product\\Price\\Plugin\\CustomerGroup',
        'line': 104,
        'file': '\/vendor\/magento\/module-catalog\/Model\/Indexer\/Product\/Price\/Plugin\/CustomerGroup.php',
        'origin': {
          'name': 'deleteById',
          'className': 'Magento\\Customer\\Api\\GroupRepositoryInterface',
          'line': 73,
          'file': '\/vendor\/magento\/module-customer\/Api\/GroupRepositoryInterface.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterGet',
        'className': 'Magento\\Catalog\\Model\\Indexer\\Category\\Flat\\Plugin\\IndexerConfigData',
        'line': 37,
        'file': '\/vendor\/magento\/module-catalog\/Model\/Indexer\/Category\/Flat\/Plugin\/IndexerConfigData.php',
        'origin': {
          'name': 'get',
          'className': 'Magento\\Indexer\\Model\\Config\\Data',
          'line': 132,
          'file': '\/vendor\/magento\/module-indexer\/Model\/Config\/Data.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeSave',
        'className': 'Magento\\Catalog\\Model\\Indexer\\Product\\Eav\\Plugin\\AttributeSet',
        'line': 59,
        'file': '\/vendor\/magento\/module-catalog\/Model\/Indexer\/Product\/Eav\/Plugin\/AttributeSet.php',
        'origin': {
          'name': 'save',
          'className': 'Magento\\Eav\\Model\\Entity\\Attribute\\Set',
          'line': 653,
          'file': '\/vendor\/magento\/module-eav\/Model\/Entity\/Attribute\/Set.php'
        }
      }],
      'after': [{
        'active': 1,
        'name': 'afterSave',
        'className': 'Magento\\Catalog\\Model\\Indexer\\Product\\Eav\\Plugin\\AttributeSet',
        'line': 86,
        'file': '\/vendor\/magento\/module-catalog\/Model\/Indexer\/Product\/Eav\/Plugin\/AttributeSet.php',
        'origin': {
          'name': 'save',
          'className': 'Magento\\Eav\\Model\\Entity\\Attribute\\Set',
          'line': 653,
          'file': '\/vendor\/magento\/module-eav\/Model\/Entity\/Attribute\/Set.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterSave',
        'className': 'Magento\\Catalog\\Model\\Plugin\\ShowOutOfStockConfig',
        'line': 31,
        'file': '\/vendor\/magento\/module-catalog\/Model\/Plugin\/ShowOutOfStockConfig.php',
        'origin': {
          'name': 'save',
          'className': 'Magento\\CatalogInventory\\Model\\Config\\Backend\\ShowOutOfStock',
          'line': 653,
          'file': '\/vendor\/magento\/module-catalog-inventory\/Model\/Config\/Backend\/ShowOutOfStock.php'
        }
      }]
    }, {
      'around': [{
        'active': 1,
        'name': 'aroundGetAttributesUsedInListing',
        'className': 'Magento\\Catalog\\Plugin\\Model\\ResourceModel\\Config',
        'line': 58,
        'file': '\/vendor\/magento\/module-catalog\/Plugin\/Model\/ResourceModel\/Config.php',
        'origin': {
          'name': 'getAttributesUsedInListing',
          'className': 'Magento\\Catalog\\Model\\ResourceModel\\Config',
          'line': 115,
          'file': '\/vendor\/magento\/module-catalog\/Model\/ResourceModel\/Config.php'
        }
      }, {
        'active': 1,
        'name': 'aroundGetAttributesUsedForSortBy',
        'className': 'Magento\\Catalog\\Plugin\\Model\\ResourceModel\\Config',
        'line': 87,
        'file': '\/vendor\/magento\/module-catalog\/Plugin\/Model\/ResourceModel\/Config.php',
        'origin': {
          'name': 'getAttributesUsedForSortBy',
          'className': 'Magento\\Catalog\\Model\\ResourceModel\\Config',
          'line': 144,
          'file': '\/vendor\/magento\/module-catalog\/Model\/ResourceModel\/Config.php'
        }
      }]
    }, {
      'around': [{
        'active': 1,
        'name': 'aroundValidate',
        'className': 'Magento\\Catalog\\Plugin\\Model\\Attribute\\Backend\\AttributeValidation',
        'line': 46,
        'file': '\/vendor\/magento\/module-catalog\/Plugin\/Model\/Attribute\/Backend\/AttributeValidation.php',
        'origin': {
          'name': 'validate',
          'className': 'Magento\\Eav\\Model\\Entity\\Attribute\\Backend\\AbstractBackend',
          'line': 231,
          'file': '\/vendor\/magento\/module-eav\/Model\/Entity\/Attribute\/Backend\/AbstractBackend.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterExecute',
        'className': 'Magento\\Catalog\\Plugin\\Model\\ResourceModel\\ReadSnapshotPlugin',
        'line': 50,
        'file': '\/vendor\/magento\/module-catalog\/Plugin\/Model\/ResourceModel\/ReadSnapshotPlugin.php',
        'origin': {
          'name': 'execute',
          'className': 'Magento\\Eav\\Model\\ResourceModel\\ReadSnapshot',
          'line': 119,
          'file': '\/vendor\/magento\/module-eav\/Model\/ResourceModel\/ReadSnapshot.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeConvert',
        'className': 'Magento\\Catalog\\Model\\Plugin\\QuoteItemProductOption',
        'line': 27,
        'file': '\/vendor\/magento\/module-catalog\/Model\/Plugin\/QuoteItemProductOption.php',
        'origin': {
          'name': 'convert',
          'className': 'Magento\\Quote\\Model\\Quote\\Item\\ToOrderItem',
          'line': 57,
          'file': '\/vendor\/magento\/module-quote\/Model\/Quote\/Item\/ToOrderItem.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterExecute',
        'className': 'Magento\\Catalog\\Plugin\\Model\\Indexer\\Category\\Product\\Execute',
        'line': 42,
        'file': '\/vendor\/magento\/module-catalog\/Plugin\/Model\/Indexer\/Category\/Product\/Execute.php',
        'origin': {
          'name': 'execute',
          'className': 'Magento\\Catalog\\Model\\Indexer\\Category\\Product\\Action\\Full',
          'line': 155,
          'file': '\/vendor\/magento\/module-catalog\/Model\/Indexer\/Category\/Product\/Action\/Full.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterSave',
        'className': 'Magento\\Catalog\\Plugin\\Model\\ResourceModel\\Attribute\\Save',
        'line': 44,
        'file': '\/vendor\/magento\/module-catalog\/Plugin\/Model\/ResourceModel\/Attribute\/Save.php',
        'origin': {
          'name': 'save',
          'className': 'Magento\\Catalog\\Model\\ResourceModel\\Attribute',
          'line': 392,
          'file': '\/vendor\/magento\/module-catalog\/Model\/ResourceModel\/Attribute.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterUpdateAttributes',
        'className': 'Magento\\Catalog\\Plugin\\Model\\Product\\Action\\UpdateAttributesFlushCache',
        'line': 43,
        'file': '\/vendor\/magento\/module-catalog\/Plugin\/Model\/Product\/Action\/UpdateAttributesFlushCache.php',
        'origin': {
          'name': 'updateAttributes',
          'className': 'Magento\\Catalog\\Model\\Product\\Action',
          'line': 88,
          'file': '\/vendor\/magento\/module-catalog\/Model\/Product\/Action.php'
        }
      }, {
        'active': 1,
        'name': 'afterUpdateWebsites',
        'className': 'Magento\\Catalog\\Plugin\\Model\\Product\\Action\\UpdateAttributesFlushCache',
        'line': 57,
        'file': '\/vendor\/magento\/module-catalog\/Plugin\/Model\/Product\/Action\/UpdateAttributesFlushCache.php',
        'origin': {
          'name': 'updateWebsites',
          'className': 'Magento\\Catalog\\Model\\Product\\Action',
          'line': 155,
          'file': '\/vendor\/magento\/module-catalog\/Model\/Product\/Action.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterDelete',
        'className': 'Magento\\Catalog\\Plugin\\Model\\AttributeSetRepository\\RemoveProducts',
        'line': 46,
        'file': '\/vendor\/magento\/module-catalog\/Plugin\/Model\/AttributeSetRepository\/RemoveProducts.php',
        'origin': {
          'name': 'delete',
          'className': 'Magento\\Eav\\Api\\AttributeSetRepositoryInterface',
          'line': 66,
          'file': '\/vendor\/magento\/module-eav\/Api\/AttributeSetRepositoryInterface.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterGenerateXml',
        'className': 'Magento\\Catalog\\Model\\Layout\\DepersonalizePlugin',
        'line': 48,
        'file': '\/vendor\/magento\/module-catalog\/Model\/Layout\/DepersonalizePlugin.php',
        'origin': {
          'name': 'generateXml',
          'className': 'Magento\\Framework\\View\\Layout',
          'line': 301,
          'file': '\/vendor\/magento\/framework\/View\/Layout.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterGetCacheKey',
        'className': 'Magento\\Catalog\\Block\\Category\\Plugin\\PriceBoxTags',
        'line': 68,
        'file': '\/vendor\/magento\/module-catalog\/Block\/Category\/Plugin\/PriceBoxTags.php',
        'origin': {
          'name': 'getCacheKey',
          'className': 'Magento\\Framework\\Pricing\\Render\\PriceBox',
          'line': 75,
          'file': '\/vendor\/magento\/framework\/Pricing\/Render\/PriceBox.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterGetTableName',
        'className': 'Magento\\Catalog\\Model\\Indexer\\Category\\Product\\Plugin\\TableResolver',
        'line': 53,
        'file': '\/vendor\/magento\/module-catalog\/Model\/Indexer\/Category\/Product\/Plugin\/TableResolver.php',
        'origin': {
          'name': 'getTableName',
          'className': 'Magento\\Framework\\App\\ResourceConnection',
          'line': 175,
          'file': '\/vendor\/magento\/framework\/App\/ResourceConnection.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeDispatch',
        'className': 'Magento\\Catalog\\Plugin\\Framework\\App\\Action\\ContextPlugin',
        'line': 56,
        'file': '\/vendor\/magento\/module-catalog\/Plugin\/Framework\/App\/Action\/ContextPlugin.php',
        'origin': {
          'name': 'dispatch',
          'className': 'Magento\\Framework\\App\\Action\\AbstractAction',
          'line': 53,
          'file': '\/vendor\/magento\/framework\/App\/Action\/AbstractAction.php'
        }
      }]
    }],
    'Magento_Quote': [{
      'after': [{
        'active': 1,
        'name': 'afterDelete',
        'className': 'Magento\\Quote\\Model\\Product\\Plugin\\RemoveQuoteItems',
        'line': 32,
        'file': '\/vendor\/magento\/module-quote\/Model\/Product\/Plugin\/RemoveQuoteItems.php',
        'origin': {
          'name': 'delete',
          'className': 'Magento\\Catalog\\Model\\ResourceModel\\Product',
          'line': 301,
          'file': '\/vendor\/magento\/module-catalog\/Model\/ResourceModel\/Product.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterUpdateAttributes',
        'className': 'Magento\\Quote\\Model\\Product\\Plugin\\MarkQuotesRecollectMassDisabled',
        'line': 42,
        'file': '\/vendor\/magento\/module-quote\/Model\/Product\/Plugin\/MarkQuotesRecollectMassDisabled.php',
        'origin': {
          'name': 'updateAttributes',
          'className': 'Magento\\Catalog\\Model\\Product\\Action',
          'line': 88,
          'file': '\/vendor\/magento\/module-catalog\/Model\/Product\/Action.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterSwitch',
        'className': 'Magento\\Quote\\Plugin\\UpdateQuoteItemStore',
        'line': 55,
        'file': '\/vendor\/magento\/module-quote\/Plugin\/UpdateQuoteItemStore.php',
        'origin': {
          'name': 'switch',
          'className': 'Magento\\Store\\Model\\StoreSwitcherInterface',
          'line': 25,
          'file': '\/vendor\/magento\/module-store\/Model\/StoreSwitcherInterface.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterSetStoreCookie',
        'className': 'Magento\\Quote\\Plugin\\UpdateQuoteStore',
        'line': 51,
        'file': '\/vendor\/magento\/module-quote\/Plugin\/UpdateQuoteStore.php',
        'origin': {
          'name': 'setStoreCookie',
          'className': 'Magento\\Store\\Api\\StoreCookieManagerInterface',
          'line': 28,
          'file': '\/vendor\/magento\/module-store\/Api\/StoreCookieManagerInterface.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterSave',
        'className': 'Magento\\Quote\\Plugin\\RecollectOnGroupChange',
        'line': 44,
        'file': '\/vendor\/magento\/module-quote\/Plugin\/RecollectOnGroupChange.php',
        'origin': {
          'name': 'save',
          'className': 'Magento\\Customer\\Model\\ResourceModel\\Customer',
          'line': 54,
          'file': '\/vendor\/magento\/module-customer\/Model\/ResourceModel\/Customer.php'
        }
      }]
    }],
    'Magento_Payment': [{
      'before': [{
        'active': 1,
        'name': 'beforeProcess',
        'className': 'Magento\\Payment\\Plugin\\PaymentConfigurationProcess',
        'line': 45,
        'file': '\/vendor\/magento\/module-payment\/Plugin\/PaymentConfigurationProcess.php',
        'origin': {
          'name': 'process',
          'className': 'Magento\\Checkout\\Block\\Checkout\\LayoutProcessor',
          'line': 150,
          'file': '\/vendor\/magento\/module-checkout\/Block\/Checkout\/LayoutProcessor.php'
        }
      }]
    }],
    'Magento_CatalogInventory': [{
      'after': [{
        'active': 1,
        'name': 'afterGetCustomAttributesMetadata',
        'className': 'Magento\\CatalogInventory\\Model\\Plugin\\FilterCustomAttribute',
        'line': 38,
        'file': '\/vendor\/magento\/module-catalog-inventory\/Model\/Plugin\/FilterCustomAttribute.php',
        'origin': {
          'name': 'getCustomAttributesMetadata',
          'className': 'Magento\\Catalog\\Model\\Product\\Attribute\\Repository',
          'line': 208,
          'file': '\/vendor\/magento\/module-catalog\/Model\/Product\/Attribute\/Repository.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeSave',
        'className': 'Magento\\CatalogInventory\\Model\\Indexer\\Stock\\Plugin\\StoreGroup',
        'line': 32,
        'file': '\/vendor\/magento\/module-catalog-inventory\/Model\/Indexer\/Stock\/Plugin\/StoreGroup.php',
        'origin': {
          'name': 'save',
          'className': 'Magento\\Store\\Model\\ResourceModel\\Group',
          'line': 392,
          'file': '\/vendor\/magento\/module-store\/Model\/ResourceModel\/Group.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterGetQuantityValidators',
        'className': 'Magento\\CatalogInventory\\Block\\Plugin\\ProductView',
        'line': 31,
        'file': '\/vendor\/magento\/module-catalog-inventory\/Block\/Plugin\/ProductView.php',
        'origin': {
          'name': 'getQuantityValidators',
          'className': 'Magento\\Catalog\\Block\\Product\\View',
          'line': 312,
          'file': '\/vendor\/magento\/module-catalog\/Block\/Product\/View.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterLoad',
        'className': 'Magento\\CatalogInventory\\Model\\Plugin\\AfterProductLoad',
        'line': 37,
        'file': '\/vendor\/magento\/module-catalog-inventory\/Model\/Plugin\/AfterProductLoad.php',
        'origin': {
          'name': 'load',
          'className': 'Magento\\Catalog\\Model\\Product',
          'line': 538,
          'file': '\/vendor\/magento\/module-catalog\/Model\/Product.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterUpdateAttributes',
        'className': 'Magento\\CatalogInventory\\Model\\Plugin\\ReindexUpdatedProducts',
        'line': 38,
        'file': '\/vendor\/magento\/module-catalog-inventory\/Model\/Plugin\/ReindexUpdatedProducts.php',
        'origin': {
          'name': 'updateAttributes',
          'className': 'Magento\\Catalog\\Model\\Product\\Action',
          'line': 88,
          'file': '\/vendor\/magento\/module-catalog\/Model\/Product\/Action.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterSave',
        'className': 'Magento\\CatalogInventory\\Model\\Plugin\\PriceIndexUpdater',
        'line': 39,
        'file': '\/vendor\/magento\/module-catalog-inventory\/Model\/Plugin\/PriceIndexUpdater.php',
        'origin': {
          'name': 'save',
          'className': 'Magento\\CatalogInventory\\Model\\ResourceModel\\Stock\\Item',
          'line': 392,
          'file': '\/vendor\/magento\/module-catalog-inventory\/Model\/ResourceModel\/Stock\/Item.php'
        }
      }, {
        'active': 1,
        'name': 'afterUpdateSetOutOfStock',
        'className': 'Magento\\CatalogInventory\\Model\\Plugin\\PriceIndexUpdater',
        'line': 63,
        'file': '\/vendor\/magento\/module-catalog-inventory\/Model\/Plugin\/PriceIndexUpdater.php',
        'origin': {
          'name': 'updateSetOutOfStock',
          'className': 'Magento\\CatalogInventory\\Model\\ResourceModel\\Stock\\Item',
          'line': 172,
          'file': '\/vendor\/magento\/module-catalog-inventory\/Model\/ResourceModel\/Stock\/Item.php'
        }
      }, {
        'active': 1,
        'name': 'afterUpdateSetInStock',
        'className': 'Magento\\CatalogInventory\\Model\\Plugin\\PriceIndexUpdater',
        'line': 75,
        'file': '\/vendor\/magento\/module-catalog-inventory\/Model\/Plugin\/PriceIndexUpdater.php',
        'origin': {
          'name': 'updateSetInStock',
          'className': 'Magento\\CatalogInventory\\Model\\ResourceModel\\Stock\\Item',
          'line': 207,
          'file': '\/vendor\/magento\/module-catalog-inventory\/Model\/ResourceModel\/Stock\/Item.php'
        }
      }]
    }, {
      'around': [{
        'active': 1,
        'name': 'aroundExecute',
        'className': 'Magento\\CatalogInventory\\Plugin\\MassUpdateProductAttribute',
        'line': 88,
        'file': '\/vendor\/magento\/module-catalog-inventory\/Plugin\/MassUpdateProductAttribute.php',
        'origin': {
          'name': 'execute',
          'className': 'Magento\\Catalog\\Controller\\Adminhtml\\Product\\Action\\Attribute\\Save',
          'line': 84,
          'file': '\/vendor\/magento\/module-catalog\/Controller\/Adminhtml\/Product\/Action\/Attribute\/Save.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterPrepareCollection',
        'className': 'Magento\\CatalogInventory\\Model\\Plugin\\ProductSearch',
        'line': 37,
        'file': '\/vendor\/magento\/module-catalog-inventory\/Model\/Plugin\/ProductSearch.php',
        'origin': {
          'name': 'prepareCollection',
          'className': 'Magento\\Catalog\\Model\\ProductLink\\Search',
          'line': 56,
          'file': '\/vendor\/magento\/module-catalog\/Model\/ProductLink\/Search.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterGetProductCollection',
        'className': 'Magento\\CatalogInventory\\Model\\Plugin\\ProductLinks',
        'line': 44,
        'file': '\/vendor\/magento\/module-catalog-inventory\/Model\/Plugin\/ProductLinks.php',
        'origin': {
          'name': 'getProductCollection',
          'className': 'Magento\\Catalog\\Model\\Product\\Link',
          'line': 144,
          'file': '\/vendor\/magento\/module-catalog\/Model\/Product\/Link.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeLoad',
        'className': 'Magento\\CatalogInventory\\Model\\AddStockStatusToCollection',
        'line': 38,
        'file': '\/vendor\/magento\/module-catalog-inventory\/Model\/AddStockStatusToCollection.php',
        'origin': {
          'name': 'load',
          'className': 'Magento\\Catalog\\Model\\ResourceModel\\Product\\Collection',
          'line': 816,
          'file': '\/vendor\/magento\/module-catalog\/Model\/ResourceModel\/Product\/Collection.php'
        }
      }]
    }],
    'Magento_Bundle': [{
      'around': [{
        'active': 1,
        'name': 'aroundValidate',
        'className': 'Magento\\Bundle\\Model\\Plugin\\PriceBackend',
        'line': 22,
        'file': '\/vendor\/magento\/module-bundle\/Model\/Plugin\/PriceBackend.php',
        'origin': {
          'name': 'validate',
          'className': 'Magento\\Catalog\\Model\\Product\\Attribute\\Backend\\Price',
          'line': 170,
          'file': '\/vendor\/magento\/module-catalog\/Model\/Product\/Attribute\/Backend\/Price.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterGetIdentities',
        'className': 'Magento\\Bundle\\Model\\Plugin\\Product',
        'line': 31,
        'file': '\/vendor\/magento\/module-bundle\/Model\/Plugin\/Product.php',
        'origin': {
          'name': 'getIdentities',
          'className': 'Magento\\Catalog\\Model\\Product',
          'line': 2403,
          'file': '\/vendor\/magento\/module-catalog\/Model\/Product.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterGetQtyToCancel',
        'className': 'Magento\\Bundle\\Model\\Sales\\Order\\Plugin\\Item',
        'line': 21,
        'file': '\/vendor\/magento\/module-bundle\/Model\/Sales\/Order\/Plugin\/Item.php',
        'origin': {
          'name': 'getQtyToCancel',
          'className': 'Magento\\Sales\\Model\\Order\\Item',
          'line': 273,
          'file': '\/vendor\/magento\/module-sales\/Model\/Order\/Item.php'
        }
      }, {
        'active': 1,
        'name': 'afterIsProcessingAvailable',
        'className': 'Magento\\Bundle\\Model\\Sales\\Order\\Plugin\\Item',
        'line': 39,
        'file': '\/vendor\/magento\/module-bundle\/Model\/Sales\/Order\/Plugin\/Item.php',
        'origin': {
          'name': 'isProcessingAvailable',
          'className': 'Magento\\Sales\\Model\\Order\\Item',
          'line': 2404,
          'file': '\/vendor\/magento\/module-sales\/Model\/Order\/Item.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterCalcRowTotal',
        'className': 'Magento\\Bundle\\Plugin\\UpdatePriceInQuoteItemOptions',
        'line': 41,
        'file': '\/vendor\/magento\/module-bundle\/Plugin\/UpdatePriceInQuoteItemOptions.php',
        'origin': {
          'name': 'calcRowTotal',
          'className': 'Magento\\Quote\\Model\\Quote\\Item',
          'line': 407,
          'file': '\/vendor\/magento\/module-quote\/Model\/Quote\/Item.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterConvert',
        'className': 'Magento\\Bundle\\Model\\Plugin\\QuoteItem',
        'line': 28,
        'file': '\/vendor\/magento\/module-bundle\/Model\/Plugin\/QuoteItem.php',
        'origin': {
          'name': 'convert',
          'className': 'Magento\\Quote\\Model\\Quote\\Item\\ToOrderItem',
          'line': 57,
          'file': '\/vendor\/magento\/module-quote\/Model\/Quote\/Item\/ToOrderItem.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterInitialize',
        'className': 'Magento\\Bundle\\Controller\\Adminhtml\\Product\\Initialization\\Helper\\Plugin\\Bundle',
        'line': 86,
        'file': '\/vendor\/magento\/module-bundle\/Controller\/Adminhtml\/Product\/Initialization\/Helper\/Plugin\/Bundle.php',
        'origin': {
          'name': 'initialize',
          'className': 'Magento\\Catalog\\Controller\\Adminhtml\\Product\\Initialization\\Helper',
          'line': 228,
          'file': '\/vendor\/magento\/module-catalog\/Controller\/Adminhtml\/Product\/Initialization\/Helper.php'
        }
      }]
    }, {
      'around': [{
        'active': 1,
        'name': 'aroundGetItemQty',
        'className': 'Magento\\Bundle\\Block\\Adminhtml\\Order\\Create\\Sidebar',
        'line': 20,
        'file': '\/vendor\/magento\/module-bundle\/Block\/Adminhtml\/Order\/Create\/Sidebar.php',
        'origin': {
          'name': 'getItemQty',
          'className': 'Magento\\Sales\\Block\\Adminhtml\\Order\\Create\\Sidebar\\AbstractSidebar',
          'line': 214,
          'file': '\/vendor\/magento\/module-sales\/Block\/Adminhtml\/Order\/Create\/Sidebar\/AbstractSidebar.php'
        }
      }, {
        'active': 1,
        'name': 'aroundIsConfigurationRequired',
        'className': 'Magento\\Bundle\\Block\\Adminhtml\\Order\\Create\\Sidebar',
        'line': 41,
        'file': '\/vendor\/magento\/module-bundle\/Block\/Adminhtml\/Order\/Create\/Sidebar.php',
        'origin': {
          'name': 'isConfigurationRequired',
          'className': 'Magento\\Sales\\Block\\Adminhtml\\Order\\Create\\Sidebar\\AbstractSidebar',
          'line': 226,
          'file': '\/vendor\/magento\/module-sales\/Block\/Adminhtml\/Order\/Create\/Sidebar\/AbstractSidebar.php'
        }
      }]
    }, {
      'around': [{
        'active': 1,
        'name': 'aroundAddStoreFilter',
        'className': 'Magento\\Bundle\\Model\\ResourceModel\\Selection\\Plugin\\Collection',
        'line': 22,
        'file': '\/vendor\/magento\/module-bundle\/Model\/ResourceModel\/Selection\/Plugin\/Collection.php',
        'origin': {
          'name': 'addStoreFilter',
          'className': 'Magento\\Bundle\\Model\\ResourceModel\\Selection\\Collection',
          'line': 877,
          'file': '\/vendor\/magento\/module-bundle\/Model\/ResourceModel\/Selection\/Collection.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterGetIdentities',
        'className': 'Magento\\Bundle\\Model\\Plugin\\Frontend\\Product',
        'line': 38,
        'file': '\/vendor\/magento\/module-bundle\/Model\/Plugin\/Frontend\/Product.php',
        'origin': {
          'name': 'getIdentities',
          'className': 'Magento\\Catalog\\Model\\Product',
          'line': 2403,
          'file': '\/vendor\/magento\/module-catalog\/Model\/Product.php'
        }
      }]
    }],
    'Magento_BundleImportExportStaging': [{
      'before': [{
        'active': 1,
        'name': 'beforeSaveOptions',
        'className': 'Magento\\BundleImportExportStaging\\Plugin\\BundleImportExport\\Model\\Import\\Product\\Type\\Bundle\\RelationsDataSaver',
        'line': 61,
        'file': '\/vendor\/magento\/module-bundle-import-export-staging\/Plugin\/BundleImportExport\/Model\/Import\/Product\/Type\/Bundle\/RelationsDataSaver.php',
        'origin': {
          'name': 'saveOptions',
          'className': 'Magento\\BundleImportExport\\Model\\Import\\Product\\Type\\Bundle\\RelationsDataSaver',
          'line': 48,
          'file': '\/vendor\/magento\/module-bundle-import-export\/Model\/Import\/Product\/Type\/Bundle\/RelationsDataSaver.php'
        }
      }, {
        'active': 1,
        'name': 'beforeSaveSelections',
        'className': 'Magento\\BundleImportExportStaging\\Plugin\\BundleImportExport\\Model\\Import\\Product\\Type\\Bundle\\RelationsDataSaver',
        'line': 90,
        'file': '\/vendor\/magento\/module-bundle-import-export-staging\/Plugin\/BundleImportExport\/Model\/Import\/Product\/Type\/Bundle\/RelationsDataSaver.php',
        'origin': {
          'name': 'saveSelections',
          'className': 'Magento\\BundleImportExport\\Model\\Import\\Product\\Type\\Bundle\\RelationsDataSaver',
          'line': 88,
          'file': '\/vendor\/magento\/module-bundle-import-export\/Model\/Import\/Product\/Type\/Bundle\/RelationsDataSaver.php'
        }
      }]
    }],
    'Magento_Sales': [{
      'before': [{
        'active': 1,
        'name': 'beforeDispatch',
        'className': 'Magento\\Sales\\Controller\\Order\\Plugin\\Authentication',
        'line': 43,
        'file': '\/vendor\/magento\/module-sales\/Controller\/Order\/Plugin\/Authentication.php',
        'origin': {
          'name': 'dispatch',
          'className': 'Magento\\Sales\\Controller\\Order\\Creditmemo',
          'line': 92,
          'file': '\/vendor\/magento\/module-sales\/Controller\/Order\/Creditmemo.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeDispatch',
        'className': 'Magento\\Sales\\Controller\\Order\\Plugin\\Authentication',
        'line': 43,
        'file': '\/vendor\/magento\/module-sales\/Controller\/Order\/Plugin\/Authentication.php',
        'origin': {
          'name': 'dispatch',
          'className': 'Magento\\Sales\\Controller\\Order\\History',
          'line': 92,
          'file': '\/vendor\/magento\/module-sales\/Controller\/Order\/History.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeDispatch',
        'className': 'Magento\\Sales\\Controller\\Order\\Plugin\\Authentication',
        'line': 43,
        'file': '\/vendor\/magento\/module-sales\/Controller\/Order\/Plugin\/Authentication.php',
        'origin': {
          'name': 'dispatch',
          'className': 'Magento\\Sales\\Controller\\Order\\Invoice',
          'line': 92,
          'file': '\/vendor\/magento\/module-sales\/Controller\/Order\/Invoice.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeDispatch',
        'className': 'Magento\\Sales\\Controller\\Order\\Plugin\\Authentication',
        'line': 43,
        'file': '\/vendor\/magento\/module-sales\/Controller\/Order\/Plugin\/Authentication.php',
        'origin': {
          'name': 'dispatch',
          'className': 'Magento\\Sales\\Controller\\Order\\PrintAction',
          'line': 92,
          'file': '\/vendor\/magento\/module-sales\/Controller\/Order\/PrintAction.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeDispatch',
        'className': 'Magento\\Sales\\Controller\\Order\\Plugin\\Authentication',
        'line': 43,
        'file': '\/vendor\/magento\/module-sales\/Controller\/Order\/Plugin\/Authentication.php',
        'origin': {
          'name': 'dispatch',
          'className': 'Magento\\Sales\\Controller\\Order\\PrintCreditmemo',
          'line': 92,
          'file': '\/vendor\/magento\/module-sales\/Controller\/Order\/PrintCreditmemo.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeDispatch',
        'className': 'Magento\\Sales\\Controller\\Order\\Plugin\\Authentication',
        'line': 43,
        'file': '\/vendor\/magento\/module-sales\/Controller\/Order\/Plugin\/Authentication.php',
        'origin': {
          'name': 'dispatch',
          'className': 'Magento\\Sales\\Controller\\Order\\PrintInvoice',
          'line': 92,
          'file': '\/vendor\/magento\/module-sales\/Controller\/Order\/PrintInvoice.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeDispatch',
        'className': 'Magento\\Sales\\Controller\\Order\\Plugin\\Authentication',
        'line': 43,
        'file': '\/vendor\/magento\/module-sales\/Controller\/Order\/Plugin\/Authentication.php',
        'origin': {
          'name': 'dispatch',
          'className': 'Magento\\Sales\\Controller\\Order\\PrintShipment',
          'line': 92,
          'file': '\/vendor\/magento\/module-sales\/Controller\/Order\/PrintShipment.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeDispatch',
        'className': 'Magento\\Sales\\Controller\\Order\\Plugin\\Authentication',
        'line': 43,
        'file': '\/vendor\/magento\/module-sales\/Controller\/Order\/Plugin\/Authentication.php',
        'origin': {
          'name': 'dispatch',
          'className': 'Magento\\Sales\\Controller\\Order\\Reorder',
          'line': 92,
          'file': '\/vendor\/magento\/module-sales\/Controller\/Order\/Reorder.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeDispatch',
        'className': 'Magento\\Sales\\Controller\\Order\\Plugin\\Authentication',
        'line': 43,
        'file': '\/vendor\/magento\/module-sales\/Controller\/Order\/Plugin\/Authentication.php',
        'origin': {
          'name': 'dispatch',
          'className': 'Magento\\Sales\\Controller\\Order\\Shipment',
          'line': 92,
          'file': '\/vendor\/magento\/module-sales\/Controller\/Order\/Shipment.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeDispatch',
        'className': 'Magento\\Sales\\Controller\\Order\\Plugin\\Authentication',
        'line': 43,
        'file': '\/vendor\/magento\/module-sales\/Controller\/Order\/Plugin\/Authentication.php',
        'origin': {
          'name': 'dispatch',
          'className': 'Magento\\Sales\\Controller\\Order\\View',
          'line': 92,
          'file': '\/vendor\/magento\/module-sales\/Controller\/Order\/View.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterProcess',
        'className': 'Magento\\Sales\\Model\\Order\\Invoice\\Plugin\\AddressUpdate',
        'line': 41,
        'file': '\/vendor\/magento\/module-sales\/Model\/Order\/Invoice\/Plugin\/AddressUpdate.php',
        'origin': {
          'name': 'process',
          'className': 'Magento\\Sales\\Model\\ResourceModel\\Order\\Handler\\Address',
          'line': 56,
          'file': '\/vendor\/magento\/module-sales\/Model\/ResourceModel\/Order\/Handler\/Address.php'
        }
      }]
    }],
    'Magento_CatalogUrlRewrite': [{
      'after': [{
        'active': 1,
        'name': 'afterChangeParent',
        'className': 'Magento\\CatalogUrlRewrite\\Model\\Category\\Plugin\\Category\\Move',
        'line': 60,
        'file': '\/vendor\/magento\/module-catalog-url-rewrite\/Model\/Category\/Plugin\/Category\/Move.php',
        'origin': {
          'name': 'changeParent',
          'className': 'Magento\\Catalog\\Model\\ResourceModel\\Category',
          'line': 948,
          'file': '\/vendor\/magento\/module-catalog\/Model\/ResourceModel\/Category.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterReplace',
        'className': 'Magento\\CatalogUrlRewrite\\Model\\Category\\Plugin\\Storage',
        'line': 50,
        'file': '\/vendor\/magento\/module-catalog-url-rewrite\/Model\/Category\/Plugin\/Storage.php',
        'origin': {
          'name': 'replace',
          'className': 'Magento\\UrlRewrite\\Model\\StorageInterface',
          'line': 22,
          'file': '\/vendor\/magento\/module-url-rewrite\/Model\/StorageInterface.php'
        }
      }],
      'before': [{
        'active': 1,
        'name': 'beforeDeleteByData',
        'className': 'Magento\\CatalogUrlRewrite\\Model\\Category\\Plugin\\Storage',
        'line': 75,
        'file': '\/vendor\/magento\/module-catalog-url-rewrite\/Model\/Category\/Plugin\/Storage.php',
        'origin': {
          'name': 'deleteByData',
          'className': 'Magento\\UrlRewrite\\Model\\StorageInterface',
          'line': 31,
          'file': '\/vendor\/magento\/module-url-rewrite\/Model\/StorageInterface.php'
        }
      }]
    }, {
      'around': [{
        'active': 1,
        'name': 'aroundFindOneByData',
        'className': 'Magento\\CatalogUrlRewrite\\Plugin\\DynamicCategoryRewrites',
        'line': 78,
        'file': '\/vendor\/magento\/module-catalog-url-rewrite\/Plugin\/DynamicCategoryRewrites.php',
        'origin': {
          'name': 'findOneByData',
          'className': 'Magento\\CatalogUrlRewrite\\Model\\Storage\\DbStorage',
          'line': 64,
          'file': '\/vendor\/magento\/module-catalog-url-rewrite\/Model\/Storage\/DbStorage.php'
        }
      }, {
        'active': 1,
        'name': 'aroundFindAllByData',
        'className': 'Magento\\CatalogUrlRewrite\\Plugin\\DynamicCategoryRewrites',
        'line': 92,
        'file': '\/vendor\/magento\/module-catalog-url-rewrite\/Plugin\/DynamicCategoryRewrites.php',
        'origin': {
          'name': 'findAllByData',
          'className': 'Magento\\CatalogUrlRewrite\\Model\\Storage\\DbStorage',
          'line': 42,
          'file': '\/vendor\/magento\/module-catalog-url-rewrite\/Model\/Storage\/DbStorage.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeSave',
        'className': 'Magento\\CatalogUrlRewrite\\Model\\Category\\Plugin\\Store\\View',
        'line': 83,
        'file': '\/vendor\/magento\/module-catalog-url-rewrite\/Model\/Category\/Plugin\/Store\/View.php',
        'origin': {
          'name': 'save',
          'className': 'Magento\\Store\\Model\\ResourceModel\\Store',
          'line': 392,
          'file': '\/vendor\/magento\/module-store\/Model\/ResourceModel\/Store.php'
        }
      }],
      'after': [{
        'active': 1,
        'name': 'afterSave',
        'className': 'Magento\\CatalogUrlRewrite\\Model\\Category\\Plugin\\Store\\View',
        'line': 98,
        'file': '\/vendor\/magento\/module-catalog-url-rewrite\/Model\/Category\/Plugin\/Store\/View.php',
        'origin': {
          'name': 'save',
          'className': 'Magento\\Store\\Model\\ResourceModel\\Store',
          'line': 392,
          'file': '\/vendor\/magento\/module-store\/Model\/ResourceModel\/Store.php'
        }
      }, {
        'active': 1,
        'name': 'afterDelete',
        'className': 'Magento\\CatalogUrlRewrite\\Model\\Category\\Plugin\\Store\\View',
        'line': 181,
        'file': '\/vendor\/magento\/module-catalog-url-rewrite\/Model\/Category\/Plugin\/Store\/View.php',
        'origin': {
          'name': 'delete',
          'className': 'Magento\\Store\\Model\\ResourceModel\\Store',
          'line': 443,
          'file': '\/vendor\/magento\/module-store\/Model\/ResourceModel\/Store.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterSave',
        'className': 'Magento\\CatalogUrlRewrite\\Model\\Category\\Plugin\\Store\\Group',
        'line': 86,
        'file': '\/vendor\/magento\/module-catalog-url-rewrite\/Model\/Category\/Plugin\/Store\/Group.php',
        'origin': {
          'name': 'save',
          'className': 'Magento\\Store\\Model\\ResourceModel\\Group',
          'line': 392,
          'file': '\/vendor\/magento\/module-store\/Model\/ResourceModel\/Group.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterChangeParent',
        'className': 'Magento\\CatalogUrlRewrite\\Model\\Category\\Plugin\\Category\\Move',
        'line': 60,
        'file': '\/vendor\/magento\/module-catalog-url-rewrite\/Model\/Category\/Plugin\/Category\/Move.php',
        'origin': {
          'name': 'changeParent',
          'className': 'Magento\\Catalog\\Model\\ResourceModel\\Category',
          'line': 948,
          'file': '\/vendor\/magento\/module-catalog\/Model\/ResourceModel\/Category.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterSetForm',
        'className': 'Magento\\CatalogUrlRewrite\\Plugin\\Catalog\\Block\\Adminhtml\\Product\\Edit\\Tab\\Attributes',
        'line': 15,
        'file': '\/vendor\/magento\/module-catalog-url-rewrite\/Plugin\/Catalog\/Block\/Adminhtml\/Product\/Edit\/Tab\/Attributes.php',
        'origin': {
          'name': 'setForm',
          'className': 'Magento\\Catalog\\Block\\Adminhtml\\Product\\Edit\\Tab\\Attributes',
          'line': 124,
          'file': '\/vendor\/magento\/module-catalog\/Block\/Adminhtml\/Product\/Edit\/Tab\/Attributes.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterInitialize',
        'className': 'Magento\\CatalogUrlRewrite\\Plugin\\Catalog\\Controller\\Adminhtml\\Product\\Initialization\\Helper',
        'line': 30,
        'file': '\/vendor\/magento\/module-catalog-url-rewrite\/Plugin\/Catalog\/Controller\/Adminhtml\/Product\/Initialization\/Helper.php',
        'origin': {
          'name': 'initialize',
          'className': 'Magento\\Catalog\\Controller\\Adminhtml\\Product\\Initialization\\Helper',
          'line': 228,
          'file': '\/vendor\/magento\/module-catalog\/Controller\/Adminhtml\/Product\/Initialization\/Helper.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterGetAttributesMeta',
        'className': 'Magento\\CatalogUrlRewrite\\Plugin\\Catalog\\Block\\Adminhtml\\Category\\Tab\\Attributes',
        'line': 19,
        'file': '\/vendor\/magento\/module-catalog-url-rewrite\/Plugin\/Catalog\/Block\/Adminhtml\/Category\/Tab\/Attributes.php',
        'origin': {
          'name': 'getAttributesMeta',
          'className': 'Magento\\Catalog\\Model\\Category\\DataProvider',
          'line': 349,
          'file': '\/vendor\/magento\/module-catalog\/Model\/Category\/DataProvider.php'
        }
      }]
    }],
    'Magento_Checkout': [{
      'after': [{
        'active': 1,
        'name': 'afterGenerateXml',
        'className': 'Magento\\Checkout\\Model\\Layout\\DepersonalizePlugin',
        'line': 45,
        'file': '\/vendor\/magento\/module-checkout\/Model\/Layout\/DepersonalizePlugin.php',
        'origin': {
          'name': 'generateXml',
          'className': 'Magento\\Framework\\View\\Layout',
          'line': 301,
          'file': '\/vendor\/magento\/framework\/View\/Layout.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterRemoveItem',
        'className': 'Magento\\Checkout\\Plugin\\Model\\Quote\\ResetQuoteAddresses',
        'line': 26,
        'file': '\/vendor\/magento\/module-checkout\/Plugin\/Model\/Quote\/ResetQuoteAddresses.php',
        'origin': {
          'name': 'removeItem',
          'className': 'Magento\\Quote\\Model\\Quote',
          'line': 1536,
          'file': '\/vendor\/magento\/module-quote\/Model\/Quote.php'
        }
      }]
    }],
    'Magento_Security': [{
      'before': [{
        'active': 1,
        'name': 'beforeInitiatePasswordReset',
        'className': 'Magento\\Security\\Model\\Plugin\\AccountManagement',
        'line': 70,
        'file': '\/vendor\/magento\/module-security\/Model\/Plugin\/AccountManagement.php',
        'origin': {
          'name': 'initiatePasswordReset',
          'className': 'Magento\\Customer\\Model\\AccountManagement',
          'line': 613,
          'file': '\/vendor\/magento\/module-customer\/Model\/AccountManagement.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterLogin',
        'className': 'Magento\\Security\\Model\\Plugin\\Auth',
        'line': 42,
        'file': '\/vendor\/magento\/module-security\/Model\/Plugin\/Auth.php',
        'origin': {
          'name': 'login',
          'className': 'Magento\\Backend\\Model\\Auth',
          'line': 149,
          'file': '\/vendor\/magento\/module-backend\/Model\/Auth.php'
        }
      }],
      'before': [{
        'active': 1,
        'name': 'beforeLogout',
        'className': 'Magento\\Security\\Model\\Plugin\\Auth',
        'line': 55,
        'file': '\/vendor\/magento\/module-security\/Model\/Plugin\/Auth.php',
        'origin': {
          'name': 'logout',
          'className': 'Magento\\Backend\\Model\\Auth',
          'line': 206,
          'file': '\/vendor\/magento\/module-backend\/Model\/Auth.php'
        }
      }]
    }, {
      'around': [{
        'active': 1,
        'name': 'aroundProlong',
        'className': 'Magento\\Security\\Model\\Plugin\\AuthSession',
        'line': 61,
        'file': '\/vendor\/magento\/module-security\/Model\/Plugin\/AuthSession.php',
        'origin': {
          'name': 'prolong',
          'className': 'Magento\\Backend\\Model\\Auth\\Session',
          'line': 172,
          'file': '\/vendor\/magento\/module-backend\/Model\/Auth\/Session.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeExecute',
        'className': 'Magento\\Security\\Model\\Plugin\\LoginController',
        'line': 52,
        'file': '\/vendor\/magento\/module-security\/Model\/Plugin\/LoginController.php',
        'origin': {
          'name': 'execute',
          'className': 'Magento\\Backend\\Controller\\Adminhtml\\Auth\\Login',
          'line': 42,
          'file': '\/vendor\/magento\/module-backend\/Controller\/Adminhtml\/Auth\/Login.php'
        }
      }]
    }],
    'Magento_MediaStorage': [{
      'after': [{
        'active': 1,
        'name': 'afterCleanMergedJsCss',
        'className': 'Magento\\MediaStorage\\Model\\Asset\\Plugin\\CleanMergedJsCss',
        'line': 43,
        'file': '\/vendor\/magento\/module-media-storage\/Model\/Asset\/Plugin\/CleanMergedJsCss.php',
        'origin': {
          'name': 'cleanMergedJsCss',
          'className': 'Magento\\Framework\\View\\Asset\\MergeService',
          'line': 119,
          'file': '\/vendor\/magento\/framework\/View\/Asset\/MergeService.php'
        }
      }]
    }],
    'Magento_CatalogImportExport': [{
      'after': [{
        'active': 1,
        'name': 'afterImportSource',
        'className': 'Magento\\CatalogImportExport\\Model\\Indexer\\Product\\Flat\\Plugin\\Import',
        'line': 43,
        'file': '\/vendor\/magento\/module-catalog-import-export\/Model\/Indexer\/Product\/Flat\/Plugin\/Import.php',
        'origin': {
          'name': 'importSource',
          'className': 'Magento\\ImportExport\\Model\\Import',
          'line': 464,
          'file': '\/vendor\/magento\/module-import-export\/Model\/Import.php'
        }
      }]
    }],
    'Magento_CatalogImportExportStaging': [{
      'before': [{
        'active': 1,
        'name': 'beforeSaveProductEntity',
        'className': 'Magento\\CatalogImportExportStaging\\Model\\Import\\ProductPlugin',
        'line': 42,
        'file': '\/vendor\/magento\/module-catalog-import-export-staging\/Model\/Import\/ProductPlugin.php',
        'origin': {
          'name': 'saveProductEntity',
          'className': 'Magento\\CatalogImportExport\\Model\\Import\\Product',
          'line': 1359,
          'file': '\/vendor\/magento\/module-catalog-import-export\/Model\/Import\/Product.php'
        }
      }]
    }],
    'Magento_Msrp': [{
      'after': [{
        'active': 1,
        'name': 'afterSetForm',
        'className': 'Magento\\Msrp\\Plugin\\Bundle\\Block\\Adminhtml\\Catalog\\Product\\Edit\\Tab\\Attributes',
        'line': 17,
        'file': '\/vendor\/magento\/module-msrp\/Plugin\/Bundle\/Block\/Adminhtml\/Catalog\/Product\/Edit\/Tab\/Attributes.php',
        'origin': {
          'name': 'setForm',
          'className': 'Magento\\Bundle\\Block\\Adminhtml\\Catalog\\Product\\Edit\\Tab\\Attributes',
          'line': 124,
          'file': '\/vendor\/magento\/module-bundle\/Block\/Adminhtml\/Catalog\/Product\/Edit\/Tab\/Attributes.php'
        }
      }]
    }],
    'Magento_Widget': [{
      'around': [{
        'active': 1,
        'name': 'aroundGetDbUpdateString',
        'className': 'Magento\\Widget\\Model\\ResourceModel\\Layout\\Plugin',
        'line': 36,
        'file': '\/vendor\/magento\/module-widget\/Model\/ResourceModel\/Layout\/Plugin.php',
        'origin': {
          'name': 'getDbUpdateString',
          'className': 'Magento\\Framework\\View\\Model\\Layout\\Merge',
          'line': 656,
          'file': '\/vendor\/magento\/framework\/View\/Model\/Layout\/Merge.php'
        }
      }]
    }],
    'Magento_ConfigurableProduct': [{
      'after': [{
        'active': 1,
        'name': 'afterGetStockItem',
        'className': 'Magento\\ConfigurableProduct\\Model\\Quote\\Item\\QuantityValidator\\Initializer\\Option\\Plugin\\ConfigurableProduct',
        'line': 23,
        'file': '\/vendor\/magento\/module-configurable-product\/Model\/Quote\/Item\/QuantityValidator\/Initializer\/Option\/Plugin\/ConfigurableProduct.php',
        'origin': {
          'name': 'getStockItem',
          'className': 'Magento\\CatalogInventory\\Model\\Quote\\Item\\QuantityValidator\\Initializer\\Option',
          'line': 56,
          'file': '\/vendor\/magento\/module-catalog-inventory\/Model\/Quote\/Item\/QuantityValidator\/Initializer\/Option.php'
        }
      }]
    }, {
      'around': [{
        'active': 1,
        'name': 'aroundIsProductConfigured',
        'className': 'Magento\\ConfigurableProduct\\Model\\Product\\CartConfiguration\\Plugin\\Configurable',
        'line': 23,
        'file': '\/vendor\/magento\/module-configurable-product\/Model\/Product\/CartConfiguration\/Plugin\/Configurable.php',
        'origin': {
          'name': 'isProductConfigured',
          'className': 'Magento\\Catalog\\Model\\Product\\CartConfiguration',
          'line': 21,
          'file': '\/vendor\/magento\/module-catalog\/Model\/Product\/CartConfiguration.php'
        }
      }]
    }, {
      'around': [{
        'active': 1,
        'name': 'aroundGetSku',
        'className': 'Magento\\ConfigurableProduct\\Model\\Order\\Admin\\Item\\Plugin\\Configurable',
        'line': 33,
        'file': '\/vendor\/magento\/module-configurable-product\/Model\/Order\/Admin\/Item\/Plugin\/Configurable.php',
        'origin': {
          'name': 'getSku',
          'className': 'Magento\\Sales\\Model\\Order\\Admin\\Item',
          'line': 17,
          'file': '\/vendor\/magento\/module-sales\/Model\/Order\/Admin\/Item.php'
        }
      }, {
        'active': 1,
        'name': 'aroundGetName',
        'className': 'Magento\\ConfigurableProduct\\Model\\Order\\Admin\\Item\\Plugin\\Configurable',
        'line': 56,
        'file': '\/vendor\/magento\/module-configurable-product\/Model\/Order\/Admin\/Item\/Plugin\/Configurable.php',
        'origin': {
          'name': 'getName',
          'className': 'Magento\\Sales\\Model\\Order\\Admin\\Item',
          'line': 29,
          'file': '\/vendor\/magento\/module-sales\/Model\/Order\/Admin\/Item.php'
        }
      }, {
        'active': 1,
        'name': 'aroundGetProductId',
        'className': 'Magento\\ConfigurableProduct\\Model\\Order\\Admin\\Item\\Plugin\\Configurable',
        'line': 79,
        'file': '\/vendor\/magento\/module-configurable-product\/Model\/Order\/Admin\/Item\/Plugin\/Configurable.php',
        'origin': {
          'name': 'getProductId',
          'className': 'Magento\\Sales\\Model\\Order\\Admin\\Item',
          'line': 41,
          'file': '\/vendor\/magento\/module-sales\/Model\/Order\/Admin\/Item.php'
        }
      }]
    }, {
      'around': [{
        'active': 1,
        'name': 'aroundGetOptions',
        'className': 'Magento\\ConfigurableProduct\\Helper\\Product\\Configuration\\Plugin',
        'line': 21,
        'file': '\/vendor\/magento\/module-configurable-product\/Helper\/Product\/Configuration\/Plugin.php',
        'origin': {
          'name': 'getOptions',
          'className': 'Magento\\Catalog\\Helper\\Product\\Configuration',
          'line': 139,
          'file': '\/vendor\/magento\/module-catalog\/Helper\/Product\/Configuration.php'
        }
      }]
    }, {
      'around': [{
        'active': 1,
        'name': 'aroundValidate',
        'className': 'Magento\\ConfigurableProduct\\Plugin\\Model\\Attribute\\Backend\\AttributeValidation',
        'line': 37,
        'file': '\/vendor\/magento\/module-configurable-product\/Plugin\/Model\/Attribute\/Backend\/AttributeValidation.php',
        'origin': {
          'name': 'validate',
          'className': 'Magento\\Eav\\Model\\Entity\\Attribute\\Backend\\AbstractBackend',
          'line': 231,
          'file': '\/vendor\/magento\/module-eav\/Model\/Entity\/Attribute\/Backend\/AbstractBackend.php'
        }
      }]
    }, {
      'around': [{
        'active': 1,
        'name': 'aroundMap',
        'className': 'Magento\\ConfigurableProduct\\Model\\Entity\\Product\\Attribute\\Group\\AttributeMapper\\Plugin',
        'line': 50,
        'file': '\/vendor\/magento\/module-configurable-product\/Model\/Entity\/Product\/Attribute\/Group\/AttributeMapper\/Plugin.php',
        'origin': {
          'name': 'map',
          'className': 'Magento\\Catalog\\Model\\Entity\\Product\\Attribute\\Group\\AttributeMapperInterface',
          'line': 24,
          'file': '\/vendor\/magento\/module-catalog\/Model\/Entity\/Product\/Attribute\/Group\/AttributeMapperInterface.php'
        }
      }]
    }, {
      'around': [{
        'active': 1,
        'name': 'aroundProcessProduct',
        'className': 'Magento\\ConfigurableProduct\\Model\\Product\\TypeTransitionManager\\Plugin\\Configurable',
        'line': 39,
        'file': '\/vendor\/magento\/module-configurable-product\/Model\/Product\/TypeTransitionManager\/Plugin\/Configurable.php',
        'origin': {
          'name': 'processProduct',
          'className': 'Magento\\Catalog\\Model\\Product\\TypeTransitionManager',
          'line': 46,
          'file': '\/vendor\/magento\/module-catalog\/Model\/Product\/TypeTransitionManager.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterSave',
        'className': 'Magento\\ConfigurableProduct\\Model\\Plugin\\ProductRepositorySave',
        'line': 54,
        'file': '\/vendor\/magento\/module-configurable-product\/Model\/Plugin\/ProductRepositorySave.php',
        'origin': {
          'name': 'save',
          'className': 'Magento\\Catalog\\Api\\ProductRepositoryInterface',
          'line': 26,
          'file': '\/vendor\/magento\/module-catalog\/Api\/ProductRepositoryInterface.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterGetOptionArray',
        'className': 'Magento\\ConfigurableProduct\\Model\\Product\\Type\\Plugin',
        'line': 38,
        'file': '\/vendor\/magento\/module-configurable-product\/Model\/Product\/Type\/Plugin.php',
        'origin': {
          'name': 'getOptionArray',
          'className': 'Magento\\Catalog\\Model\\Product\\Type',
          'line': 179,
          'file': '\/vendor\/magento\/module-catalog\/Model\/Product\/Type.php'
        }
      }]
    }, {
      'around': [{
        'active': 1,
        'name': 'aroundValidate',
        'className': 'Magento\\ConfigurableProduct\\Model\\Plugin\\PriceBackend',
        'line': 24,
        'file': '\/vendor\/magento\/module-configurable-product\/Model\/Plugin\/PriceBackend.php',
        'origin': {
          'name': 'validate',
          'className': 'Magento\\Catalog\\Model\\Product\\Attribute\\Backend\\Price',
          'line': 170,
          'file': '\/vendor\/magento\/module-catalog\/Model\/Product\/Attribute\/Backend\/Price.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterGetOptionsMediaGalleryDataJson',
        'className': 'Magento\\ConfigurableProduct\\Block\\Plugin\\Product\\Media\\Gallery',
        'line': 36,
        'file': '\/vendor\/magento\/module-configurable-product\/Block\/Plugin\/Product\/Media\/Gallery.php',
        'origin': {
          'name': 'getOptionsMediaGalleryDataJson',
          'className': 'Magento\\ProductVideo\\Block\\Product\\View\\Gallery',
          'line': 93,
          'file': '\/vendor\/magento\/module-product-video\/Block\/Product\/View\/Gallery.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterIsSalable',
        'className': 'Magento\\ConfigurableProduct\\Plugin\\Catalog\\Model\\Product\\Pricing\\Renderer\\SalableResolver',
        'line': 37,
        'file': '\/vendor\/magento\/module-configurable-product\/Plugin\/Catalog\/Model\/Product\/Pricing\/Renderer\/SalableResolver.php',
        'origin': {
          'name': 'isSalable',
          'className': 'Magento\\Catalog\\Model\\Product\\Pricing\\Renderer\\SalableResolver',
          'line': 20,
          'file': '\/vendor\/magento\/module-catalog\/Model\/Product\/Pricing\/Renderer\/SalableResolver.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterGetIdentities',
        'className': 'Magento\\ConfigurableProduct\\Model\\Plugin\\ProductIdentitiesExtender',
        'line': 47,
        'file': '\/vendor\/magento\/module-configurable-product\/Model\/Plugin\/ProductIdentitiesExtender.php',
        'origin': {
          'name': 'getIdentities',
          'className': 'Magento\\Catalog\\Model\\Product',
          'line': 2403,
          'file': '\/vendor\/magento\/module-catalog\/Model\/Product.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeValidate',
        'className': 'Magento\\ConfigurableProduct\\Plugin\\SalesRule\\Model\\Rule\\Condition\\Product',
        'line': 26,
        'file': '\/vendor\/magento\/module-configurable-product\/Plugin\/SalesRule\/Model\/Rule\/Condition\/Product.php',
        'origin': {
          'name': 'validate',
          'className': 'Magento\\SalesRule\\Model\\Rule\\Condition\\Product',
          'line': 168,
          'file': '\/vendor\/magento\/module-sales-rule\/Model\/Rule\/Condition\/Product.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterMapItem',
        'className': 'Magento\\ConfigurableProduct\\Plugin\\Tax\\Model\\Sales\\Total\\Quote\\CommonTaxCollector',
        'line': 31,
        'file': '\/vendor\/magento\/module-configurable-product\/Plugin\/Tax\/Model\/Sales\/Total\/Quote\/CommonTaxCollector.php',
        'origin': {
          'name': 'mapItem',
          'className': 'Magento\\Tax\\Model\\Sales\\Total\\Quote\\CommonTaxCollector',
          'line': 213,
          'file': '\/vendor\/magento\/module-tax\/Model\/Sales\/Total\/Quote\/CommonTaxCollector.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterInitialize',
        'className': 'Magento\\ConfigurableProduct\\Controller\\Adminhtml\\Product\\Initialization\\Helper\\Plugin\\Configurable',
        'line': 84,
        'file': '\/vendor\/magento\/module-configurable-product\/Controller\/Adminhtml\/Product\/Initialization\/Helper\/Plugin\/Configurable.php',
        'origin': {
          'name': 'initialize',
          'className': 'Magento\\Catalog\\Controller\\Adminhtml\\Product\\Initialization\\Helper',
          'line': 228,
          'file': '\/vendor\/magento\/module-catalog\/Controller\/Adminhtml\/Product\/Initialization\/Helper.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterBuild',
        'className': 'Magento\\ConfigurableProduct\\Controller\\Adminhtml\\Product\\Builder\\Plugin',
        'line': 47,
        'file': '\/vendor\/magento\/module-configurable-product\/Controller\/Adminhtml\/Product\/Builder\/Plugin.php',
        'origin': {
          'name': 'build',
          'className': 'Magento\\Catalog\\Controller\\Adminhtml\\Product\\Builder',
          'line': 94,
          'file': '\/vendor\/magento\/module-catalog\/Controller\/Adminhtml\/Product\/Builder.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeValidate',
        'className': 'Magento\\ConfigurableProduct\\Model\\Product\\Validator\\Plugin',
        'line': 60,
        'file': '\/vendor\/magento\/module-configurable-product\/Model\/Product\/Validator\/Plugin.php',
        'origin': {
          'name': 'validate',
          'className': 'Magento\\Catalog\\Model\\Product\\Validator',
          'line': 23,
          'file': '\/vendor\/magento\/module-catalog\/Model\/Product\/Validator.php'
        }
      }],
      'after': [{
        'active': 1,
        'name': 'afterValidate',
        'className': 'Magento\\ConfigurableProduct\\Model\\Product\\Validator\\Plugin',
        'line': 82,
        'file': '\/vendor\/magento\/module-configurable-product\/Model\/Product\/Validator\/Plugin.php',
        'origin': {
          'name': 'validate',
          'className': 'Magento\\Catalog\\Model\\Product\\Validator',
          'line': 23,
          'file': '\/vendor\/magento\/module-catalog\/Model\/Product\/Validator.php'
        }
      }]
    }, {
      'around': [{
        'active': 1,
        'name': 'aroundGetItemQty',
        'className': 'Magento\\ConfigurableProduct\\Block\\Adminhtml\\Order\\Create\\Sidebar',
        'line': 26,
        'file': '\/vendor\/magento\/module-configurable-product\/Block\/Adminhtml\/Order\/Create\/Sidebar.php',
        'origin': {
          'name': 'getItemQty',
          'className': 'Magento\\Sales\\Block\\Adminhtml\\Order\\Create\\Sidebar\\AbstractSidebar',
          'line': 214,
          'file': '\/vendor\/magento\/module-sales\/Block\/Adminhtml\/Order\/Create\/Sidebar\/AbstractSidebar.php'
        }
      }, {
        'active': 1,
        'name': 'aroundIsConfigurationRequired',
        'className': 'Magento\\ConfigurableProduct\\Block\\Adminhtml\\Order\\Create\\Sidebar',
        'line': 47,
        'file': '\/vendor\/magento\/module-configurable-product\/Block\/Adminhtml\/Order\/Create\/Sidebar.php',
        'origin': {
          'name': 'isConfigurationRequired',
          'className': 'Magento\\Sales\\Block\\Adminhtml\\Order\\Create\\Sidebar\\AbstractSidebar',
          'line': 226,
          'file': '\/vendor\/magento\/module-sales\/Block\/Adminhtml\/Order\/Create\/Sidebar\/AbstractSidebar.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeSave',
        'className': 'Magento\\ConfigurableProduct\\Plugin\\Model\\ResourceModel\\Product',
        'line': 47,
        'file': '\/vendor\/magento\/module-configurable-product\/Plugin\/Model\/ResourceModel\/Product.php',
        'origin': {
          'name': 'save',
          'className': 'Magento\\Catalog\\Model\\ResourceModel\\Product',
          'line': 688,
          'file': '\/vendor\/magento\/module-catalog\/Model\/ResourceModel\/Product.php'
        }
      }],
      'around': [{
        'active': 1,
        'name': 'aroundDelete',
        'className': 'Magento\\ConfigurableProduct\\Plugin\\Model\\ResourceModel\\Product',
        'line': 66,
        'file': '\/vendor\/magento\/module-configurable-product\/Plugin\/Model\/ResourceModel\/Product.php',
        'origin': {
          'name': 'delete',
          'className': 'Magento\\Catalog\\Model\\ResourceModel\\Product',
          'line': 301,
          'file': '\/vendor\/magento\/module-catalog\/Model\/ResourceModel\/Product.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterGetSelect',
        'className': 'Magento\\ConfigurableProduct\\Plugin\\Model\\ResourceModel\\Attribute\\InStockOptionSelectBuilder',
        'line': 41,
        'file': '\/vendor\/magento\/module-configurable-product\/Plugin\/Model\/ResourceModel\/Attribute\/InStockOptionSelectBuilder.php',
        'origin': {
          'name': 'getSelect',
          'className': 'Magento\\ConfigurableProduct\\Model\\ResourceModel\\Attribute\\OptionSelectBuilderInterface',
          'line': 25,
          'file': '\/vendor\/magento\/module-configurable-product\/Model\/ResourceModel\/Attribute\/OptionSelectBuilderInterface.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterGetIdentities',
        'className': 'Magento\\ConfigurableProduct\\Model\\Plugin\\Frontend\\ProductIdentitiesExtender',
        'line': 38,
        'file': '\/vendor\/magento\/module-configurable-product\/Model\/Plugin\/Frontend\/ProductIdentitiesExtender.php',
        'origin': {
          'name': 'getIdentities',
          'className': 'Magento\\Catalog\\Model\\Product',
          'line': 2403,
          'file': '\/vendor\/magento\/module-catalog\/Model\/Product.php'
        }
      }]
    }],
    'Magento_SalesRule': [{
      'after': [{
        'active': 1,
        'name': 'afterGetProductAttributes',
        'className': 'Magento\\SalesRule\\Model\\Plugin\\QuoteConfigProductAttributes',
        'line': 37,
        'file': '\/vendor\/magento\/module-sales-rule\/Model\/Plugin\/QuoteConfigProductAttributes.php',
        'origin': {
          'name': 'getProductAttributes',
          'className': 'Magento\\Quote\\Model\\Quote\\Config',
          'line': 26,
          'file': '\/vendor\/magento\/module-quote\/Model\/Quote\/Config.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterGet',
        'className': 'Magento\\SalesRule\\Plugin\\CartTotalRepository',
        'line': 62,
        'file': '\/vendor\/magento\/module-sales-rule\/Plugin\/CartTotalRepository.php',
        'origin': {
          'name': 'get',
          'className': 'Magento\\Quote\\Model\\Cart\\CartTotalRepository',
          'line': 86,
          'file': '\/vendor\/magento\/module-quote\/Model\/Cart\/CartTotalRepository.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterPlace',
        'className': 'Magento\\SalesRule\\Plugin\\CouponUsagesIncrement',
        'line': 40,
        'file': '\/vendor\/magento\/module-sales-rule\/Plugin\/CouponUsagesIncrement.php',
        'origin': {
          'name': 'place',
          'className': 'Magento\\Sales\\Model\\Order',
          'line': 1176,
          'file': '\/vendor\/magento\/module-sales\/Model\/Order.php'
        }
      }]
    }],
    'Magento_CatalogRule': [{
      'after': [{
        'active': 1,
        'name': 'afterSave',
        'className': 'Magento\\CatalogRule\\Plugin\\Indexer\\Product\\Save\\ApplyRules',
        'line': 34,
        'file': '\/vendor\/magento\/module-catalog-rule\/Plugin\/Indexer\/Product\/Save\/ApplyRules.php',
        'origin': {
          'name': 'save',
          'className': 'Magento\\Catalog\\Model\\ResourceModel\\Product',
          'line': 688,
          'file': '\/vendor\/magento\/module-catalog\/Model\/ResourceModel\/Product.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterSave',
        'className': 'Magento\\CatalogRule\\Plugin\\Indexer\\Category',
        'line': 33,
        'file': '\/vendor\/magento\/module-catalog-rule\/Plugin\/Indexer\/Category.php',
        'origin': {
          'name': 'save',
          'className': 'Magento\\Catalog\\Model\\Category',
          'line': 653,
          'file': '\/vendor\/magento\/module-catalog\/Model\/Category.php'
        }
      }, {
        'active': 1,
        'name': 'afterDelete',
        'className': 'Magento\\CatalogRule\\Plugin\\Indexer\\Category',
        'line': 52,
        'file': '\/vendor\/magento\/module-catalog-rule\/Plugin\/Indexer\/Category.php',
        'origin': {
          'name': 'delete',
          'className': 'Magento\\Catalog\\Model\\Category',
          'line': 843,
          'file': '\/vendor\/magento\/module-catalog\/Model\/Category.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterDelete',
        'className': 'Magento\\CatalogRule\\Plugin\\Indexer\\Website',
        'line': 34,
        'file': '\/vendor\/magento\/module-catalog-rule\/Plugin\/Indexer\/Website.php',
        'origin': {
          'name': 'delete',
          'className': 'Magento\\Store\\Model\\Website',
          'line': 843,
          'file': '\/vendor\/magento\/module-store\/Model\/Website.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterDelete',
        'className': 'Magento\\CatalogRule\\Plugin\\Indexer\\CustomerGroup',
        'line': 33,
        'file': '\/vendor\/magento\/module-catalog-rule\/Plugin\/Indexer\/CustomerGroup.php',
        'origin': {
          'name': 'delete',
          'className': 'Magento\\Customer\\Model\\Group',
          'line': 843,
          'file': '\/vendor\/magento\/module-customer\/Model\/Group.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterImportSource',
        'className': 'Magento\\CatalogRule\\Plugin\\Indexer\\ImportExport',
        'line': 35,
        'file': '\/vendor\/magento\/module-catalog-rule\/Plugin\/Indexer\/ImportExport.php',
        'origin': {
          'name': 'importSource',
          'className': 'Magento\\ImportExport\\Model\\Import',
          'line': 464,
          'file': '\/vendor\/magento\/module-import-export\/Model\/Import.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterSave',
        'className': 'Magento\\CatalogRule\\Plugin\\Indexer\\Product\\Attribute',
        'line': 54,
        'file': '\/vendor\/magento\/module-catalog-rule\/Plugin\/Indexer\/Product\/Attribute.php',
        'origin': {
          'name': 'save',
          'className': 'Magento\\Catalog\\Model\\ResourceModel\\Eav\\Attribute',
          'line': 653,
          'file': '\/vendor\/magento\/module-catalog\/Model\/ResourceModel\/Eav\/Attribute.php'
        }
      }, {
        'active': 1,
        'name': 'afterDelete',
        'className': 'Magento\\CatalogRule\\Plugin\\Indexer\\Product\\Attribute',
        'line': 71,
        'file': '\/vendor\/magento\/module-catalog-rule\/Plugin\/Indexer\/Product\/Attribute.php',
        'origin': {
          'name': 'delete',
          'className': 'Magento\\Catalog\\Model\\ResourceModel\\Eav\\Attribute',
          'line': 843,
          'file': '\/vendor\/magento\/module-catalog\/Model\/ResourceModel\/Eav\/Attribute.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterUpdateAttributes',
        'className': 'Magento\\CatalogRule\\Plugin\\Model\\Product\\Action',
        'line': 35,
        'file': '\/vendor\/magento\/module-catalog-rule\/Plugin\/Model\/Product\/Action.php',
        'origin': {
          'name': 'updateAttributes',
          'className': 'Magento\\Catalog\\Model\\Product\\Action',
          'line': 88,
          'file': '\/vendor\/magento\/module-catalog\/Model\/Product\/Action.php'
        }
      }]
    }],
    'Magento_Downloadable': [{
      'around': [{
        'active': 1,
        'name': 'aroundIsProductConfigured',
        'className': 'Magento\\Downloadable\\Model\\Product\\CartConfiguration\\Plugin\\Downloadable',
        'line': 23,
        'file': '\/vendor\/magento\/module-downloadable\/Model\/Product\/CartConfiguration\/Plugin\/Downloadable.php',
        'origin': {
          'name': 'isProductConfigured',
          'className': 'Magento\\Catalog\\Model\\Product\\CartConfiguration',
          'line': 21,
          'file': '\/vendor\/magento\/module-catalog\/Model\/Product\/CartConfiguration.php'
        }
      }]
    }, {
      'around': [{
        'active': 1,
        'name': 'aroundProcessProduct',
        'className': 'Magento\\Downloadable\\Model\\Product\\TypeTransitionManager\\Plugin\\Downloadable',
        'line': 48,
        'file': '\/vendor\/magento\/module-downloadable\/Model\/Product\/TypeTransitionManager\/Plugin\/Downloadable.php',
        'origin': {
          'name': 'processProduct',
          'className': 'Magento\\Catalog\\Model\\Product\\TypeTransitionManager',
          'line': 46,
          'file': '\/vendor\/magento\/module-catalog\/Model\/Product\/TypeTransitionManager.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterInitialize',
        'className': 'Magento\\Downloadable\\Controller\\Adminhtml\\Product\\Initialization\\Helper\\Plugin\\Downloadable',
        'line': 78,
        'file': '\/vendor\/magento\/module-downloadable\/Controller\/Adminhtml\/Product\/Initialization\/Helper\/Plugin\/Downloadable.php',
        'origin': {
          'name': 'initialize',
          'className': 'Magento\\Catalog\\Controller\\Adminhtml\\Product\\Initialization\\Helper',
          'line': 228,
          'file': '\/vendor\/magento\/module-catalog\/Controller\/Adminhtml\/Product\/Initialization\/Helper.php'
        }
      }]
    }],
    'Magento_GiftCard': [{
      'after': [{
        'active': 1,
        'name': 'afterConvert',
        'className': 'Magento\\GiftCard\\Model\\Plugin\\QuoteItem',
        'line': 46,
        'file': '\/vendor\/magento\/module-gift-card\/Model\/Plugin\/QuoteItem.php',
        'origin': {
          'name': 'convert',
          'className': 'Magento\\Quote\\Model\\Quote\\Item\\ToOrderItem',
          'line': 57,
          'file': '\/vendor\/magento\/module-quote\/Model\/Quote\/Item\/ToOrderItem.php'
        }
      }]
    }, {
      'around': [{
        'active': 1,
        'name': 'aroundIsProductConfigured',
        'className': 'Magento\\GiftCard\\Model\\Product\\CartConfiguration\\Plugin\\GiftCard',
        'line': 25,
        'file': '\/vendor\/magento\/module-gift-card\/Model\/Product\/CartConfiguration\/Plugin\/GiftCard.php',
        'origin': {
          'name': 'isProductConfigured',
          'className': 'Magento\\Catalog\\Model\\Product\\CartConfiguration',
          'line': 21,
          'file': '\/vendor\/magento\/module-catalog\/Model\/Product\/CartConfiguration.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterGetWishlistOptions',
        'className': 'Magento\\GiftCard\\Block\\Product\\View\\Plugin',
        'line': 20,
        'file': '\/vendor\/magento\/module-gift-card\/Block\/Product\/View\/Plugin.php',
        'origin': {
          'name': 'getWishlistOptions',
          'className': 'Magento\\Wishlist\\Block\\Catalog\\Product\\View\\AddTo\\Wishlist',
          'line': 34,
          'file': '\/vendor\/magento\/module-wishlist\/Block\/Catalog\/Product\/View\/AddTo\/Wishlist.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterGetWishlistOptions',
        'className': 'Magento\\GiftCard\\Block\\Product\\View\\Plugin',
        'line': 20,
        'file': '\/vendor\/magento\/module-gift-card\/Block\/Product\/View\/Plugin.php',
        'origin': {
          'name': 'getWishlistOptions',
          'className': 'Magento\\Wishlist\\Block\\Item\\Configure',
          'line': 57,
          'file': '\/vendor\/magento\/module-wishlist\/Block\/Item\/Configure.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterCanAddToGiftRegistry',
        'className': 'Magento\\GiftCard\\Helper\\GiftRegistry\\Plugin',
        'line': 42,
        'file': '\/vendor\/magento\/module-gift-card\/Helper\/GiftRegistry\/Plugin.php',
        'origin': {
          'name': 'canAddToGiftRegistry',
          'className': 'Magento\\GiftRegistry\\Helper\\Data',
          'line': 297,
          'file': '\/vendor\/magento\/module-gift-registry\/Helper\/Data.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeInitializeFromData',
        'className': 'Magento\\GiftCard\\Controller\\Adminhtml\\Product\\Initialization\\Helper\\Plugin\\GiftCard',
        'line': 49,
        'file': '\/vendor\/magento\/module-gift-card\/Controller\/Adminhtml\/Product\/Initialization\/Helper\/Plugin\/GiftCard.php',
        'origin': {
          'name': 'initializeFromData',
          'className': 'Magento\\Catalog\\Controller\\Adminhtml\\Product\\Initialization\\Helper',
          'line': 154,
          'file': '\/vendor\/magento\/module-catalog\/Controller\/Adminhtml\/Product\/Initialization\/Helper.php'
        }
      }],
      'after': [{
        'active': 1,
        'name': 'afterInitialize',
        'className': 'Magento\\GiftCard\\Controller\\Adminhtml\\Product\\Initialization\\Helper\\Plugin\\GiftCard',
        'line': 67,
        'file': '\/vendor\/magento\/module-gift-card\/Controller\/Adminhtml\/Product\/Initialization\/Helper\/Plugin\/GiftCard.php',
        'origin': {
          'name': 'initialize',
          'className': 'Magento\\Catalog\\Controller\\Adminhtml\\Product\\Initialization\\Helper',
          'line': 228,
          'file': '\/vendor\/magento\/module-catalog\/Controller\/Adminhtml\/Product\/Initialization\/Helper.php'
        }
      }]
    }],
    'Magento_Captcha': [{
      'around': [{
        'active': 1,
        'name': 'aroundExecute',
        'className': 'Magento\\Captcha\\Model\\Customer\\Plugin\\AjaxLogin',
        'line': 75,
        'file': '\/vendor\/magento\/module-captcha\/Model\/Customer\/Plugin\/AjaxLogin.php',
        'origin': {
          'name': 'execute',
          'className': 'Magento\\Customer\\Controller\\Ajax\\Login',
          'line': 168,
          'file': '\/vendor\/magento\/module-customer\/Controller\/Ajax\/Login.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterGetConfig',
        'className': 'Magento\\Captcha\\Model\\Cart\\ConfigPlugin',
        'line': 31,
        'file': '\/vendor\/magento\/module-captcha\/Model\/Cart\/ConfigPlugin.php',
        'origin': {
          'name': 'getConfig',
          'className': 'Magento\\Checkout\\Block\\Cart\\Sidebar',
          'line': 75,
          'file': '\/vendor\/magento\/module-checkout\/Block\/Cart\/Sidebar.php'
        }
      }]
    }],
    'Magento_CustomerCustomAttributes': [{
      'after': [{
        'active': 1,
        'name': 'afterConvert',
        'className': 'Magento\\CustomerCustomAttributes\\Model\\Plugin\\ConvertQuoteAddressToOrderAddress',
        'line': 32,
        'file': '\/vendor\/magento\/module-customer-custom-attributes\/Model\/Plugin\/ConvertQuoteAddressToOrderAddress.php',
        'origin': {
          'name': 'convert',
          'className': 'Magento\\Quote\\Model\\Quote\\Address\\ToOrderAddress',
          'line': 54,
          'file': '\/vendor\/magento\/module-quote\/Model\/Quote\/Address\/ToOrderAddress.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterExportCustomerAddress',
        'className': 'Magento\\CustomerCustomAttributes\\Model\\Plugin\\ConvertQuoteAddressToCustomerAddress',
        'line': 29,
        'file': '\/vendor\/magento\/module-customer-custom-attributes\/Model\/Plugin\/ConvertQuoteAddressToCustomerAddress.php',
        'origin': {
          'name': 'exportCustomerAddress',
          'className': 'Magento\\Quote\\Model\\Quote\\Address',
          'line': 522,
          'file': '\/vendor\/magento\/module-quote\/Model\/Quote\/Address.php'
        }
      }]
    }, {
      'around': [{
        'active': 1,
        'name': 'aroundGetPrefixOptions',
        'className': 'Magento\\CustomerCustomAttributes\\Plugin\\FormatPrefixSuffixOptions',
        'line': 40,
        'file': '\/vendor\/magento\/module-customer-custom-attributes\/Plugin\/FormatPrefixSuffixOptions.php',
        'origin': {
          'name': 'getPrefixOptions',
          'className': 'Magento\\Customer\\Block\\Widget\\Name',
          'line': 104,
          'file': '\/vendor\/magento\/module-customer\/Block\/Widget\/Name.php'
        }
      }, {
        'active': 1,
        'name': 'aroundGetSuffixOptions',
        'className': 'Magento\\CustomerCustomAttributes\\Plugin\\FormatPrefixSuffixOptions',
        'line': 69,
        'file': '\/vendor\/magento\/module-customer-custom-attributes\/Plugin\/FormatPrefixSuffixOptions.php',
        'origin': {
          'name': 'getSuffixOptions',
          'className': 'Magento\\Customer\\Block\\Widget\\Name',
          'line': 163,
          'file': '\/vendor\/magento\/module-customer\/Block\/Widget\/Name.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeUpdateData',
        'className': 'Magento\\CustomerCustomAttributes\\Model\\Plugin\\AddCustomAttributesToCustomerAddress',
        'line': 42,
        'file': '\/vendor\/magento\/module-customer-custom-attributes\/Model\/Plugin\/AddCustomAttributesToCustomerAddress.php',
        'origin': {
          'name': 'updateData',
          'className': 'Magento\\Customer\\Model\\Address',
          'line': 141,
          'file': '\/vendor\/magento\/module-customer\/Model\/Address.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeBeforeSave',
        'className': 'Magento\\CustomerCustomAttributes\\Model\\Plugin\\ValidateCustomerAddressAttribute',
        'line': 37,
        'file': '\/vendor\/magento\/module-customer-custom-attributes\/Model\/Plugin\/ValidateCustomerAddressAttribute.php',
        'origin': {
          'name': 'beforeSave',
          'className': 'Magento\\Customer\\Model\\Attribute',
          'line': 244,
          'file': '\/vendor\/magento\/module-customer\/Model\/Attribute.php'
        }
      }]
    }],
    'Magento_Wishlist': [{
      'before': [{
        'active': 1,
        'name': 'beforeDispatch',
        'className': 'Magento\\Wishlist\\Controller\\Index\\Plugin',
        'line': 73,
        'file': '\/vendor\/magento\/module-wishlist\/Controller\/Index\/Plugin.php',
        'origin': {
          'name': 'dispatch',
          'className': 'Magento\\Wishlist\\Controller\\AbstractIndex',
          'line': 92,
          'file': '\/vendor\/magento\/module-wishlist\/Controller\/AbstractIndex.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterGetData',
        'className': 'Magento\\Wishlist\\Plugin\\Ui\\DataProvider\\WishlistSettings',
        'line': 40,
        'file': '\/vendor\/magento\/module-wishlist\/Plugin\/Ui\/DataProvider\/WishlistSettings.php',
        'origin': {
          'name': 'getData',
          'className': 'Magento\\Catalog\\Ui\\DataProvider\\Product\\Listing\\DataProvider',
          'line': 64,
          'file': '\/vendor\/magento\/module-catalog\/Ui\/DataProvider\/Product\/Listing\/DataProvider.php'
        }
      }]
    }],
    'Magento_CheckoutAgreements': [{
      'before': [{
        'active': 1,
        'name': 'beforeSavePaymentInformationAndPlaceOrder',
        'className': 'Magento\\CheckoutAgreements\\Model\\Checkout\\Plugin\\Validation',
        'line': 65,
        'file': '\/vendor\/magento\/module-checkout-agreements\/Model\/Checkout\/Plugin\/Validation.php',
        'origin': {
          'name': 'savePaymentInformationAndPlaceOrder',
          'className': 'Magento\\Checkout\\Api\\PaymentInformationManagementInterface',
          'line': 24,
          'file': '\/vendor\/magento\/module-checkout\/Api\/PaymentInformationManagementInterface.php'
        }
      }, {
        'active': 1,
        'name': 'beforeSavePaymentInformation',
        'className': 'Magento\\CheckoutAgreements\\Model\\Checkout\\Plugin\\Validation',
        'line': 85,
        'file': '\/vendor\/magento\/module-checkout-agreements\/Model\/Checkout\/Plugin\/Validation.php',
        'origin': {
          'name': 'savePaymentInformation',
          'className': 'Magento\\Checkout\\Api\\PaymentInformationManagementInterface',
          'line': 39,
          'file': '\/vendor\/magento\/module-checkout\/Api\/PaymentInformationManagementInterface.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeSavePaymentInformationAndPlaceOrder',
        'className': 'Magento\\CheckoutAgreements\\Model\\Checkout\\Plugin\\GuestValidation',
        'line': 70,
        'file': '\/vendor\/magento\/module-checkout-agreements\/Model\/Checkout\/Plugin\/GuestValidation.php',
        'origin': {
          'name': 'savePaymentInformationAndPlaceOrder',
          'className': 'Magento\\Checkout\\Api\\GuestPaymentInformationManagementInterface',
          'line': 25,
          'file': '\/vendor\/magento\/module-checkout\/Api\/GuestPaymentInformationManagementInterface.php'
        }
      }, {
        'active': 1,
        'name': 'beforeSavePaymentInformation',
        'className': 'Magento\\CheckoutAgreements\\Model\\Checkout\\Plugin\\GuestValidation',
        'line': 92,
        'file': '\/vendor\/magento\/module-checkout-agreements\/Model\/Checkout\/Plugin\/GuestValidation.php',
        'origin': {
          'name': 'savePaymentInformation',
          'className': 'Magento\\Checkout\\Api\\GuestPaymentInformationManagementInterface',
          'line': 42,
          'file': '\/vendor\/magento\/module-checkout\/Api\/GuestPaymentInformationManagementInterface.php'
        }
      }]
    }],
    'Magento_Staging': [{
      'before': [{
        'active': 1,
        'name': 'beforeDispatch',
        'className': 'Magento\\Staging\\Plugin\\Framework\\App\\FrontController',
        'line': 57,
        'file': '\/vendor\/magento\/module-staging\/Plugin\/Framework\/App\/FrontController.php',
        'origin': {
          'name': 'dispatch',
          'className': 'Magento\\Framework\\App\\FrontControllerInterface',
          'line': 24,
          'file': '\/vendor\/magento\/framework\/App\/FrontControllerInterface.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeDispatch',
        'className': 'Magento\\Staging\\Plugin\\RestPlugin',
        'line': 50,
        'file': '\/vendor\/magento\/module-staging\/Plugin\/RestPlugin.php',
        'origin': {
          'name': 'dispatch',
          'className': 'Magento\\Webapi\\Controller\\Rest',
          'line': 180,
          'file': '\/vendor\/magento\/module-webapi\/Controller\/Rest.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterIsEnabled',
        'className': 'Magento\\Staging\\Plugin\\PageCache\\Model\\Config',
        'line': 33,
        'file': '\/vendor\/magento\/module-staging\/Plugin\/PageCache\/Model\/Config.php',
        'origin': {
          'name': 'isEnabled',
          'className': 'Magento\\PageCache\\Model\\Config',
          'line': 272,
          'file': '\/vendor\/magento\/module-page-cache\/Model\/Config.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterIsEnabled',
        'className': 'Magento\\Staging\\Plugin\\Store\\Model\\BaseUrlChecker',
        'line': 35,
        'file': '\/vendor\/magento\/module-staging\/Plugin\/Store\/Model\/BaseUrlChecker.php',
        'origin': {
          'name': 'isEnabled',
          'className': 'Magento\\Store\\Model\\BaseUrlChecker',
          'line': 52,
          'file': '\/vendor\/magento\/module-store\/Model\/BaseUrlChecker.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterIsScopeDateInInterval',
        'className': 'Magento\\Staging\\Plugin\\DateTime\\Timezone',
        'line': 33,
        'file': '\/vendor\/magento\/module-staging\/Plugin\/DateTime\/Timezone.php',
        'origin': {
          'name': 'isScopeDateInInterval',
          'className': 'Magento\\Framework\\Stdlib\\DateTime\\Timezone',
          'line': 236,
          'file': '\/vendor\/magento\/framework\/Stdlib\/DateTime\/Timezone.php'
        }
      }]
    }, {
      'around': [{
        'active': 1,
        'name': 'aroundGetCurrentStoreId',
        'className': 'Magento\\Staging\\Plugin\\Store\\Model\\StoreResolver',
        'line': 55,
        'file': '\/vendor\/magento\/module-staging\/Plugin\/Store\/Model\/StoreResolver.php',
        'origin': {
          'name': 'getCurrentStoreId',
          'className': 'Magento\\Store\\Model\\StoreResolver',
          'line': 95,
          'file': '\/vendor\/magento\/module-store\/Model\/StoreResolver.php'
        }
      }]
    }, {
      'around': [{
        'active': 1,
        'name': 'aroundExecute',
        'className': 'Magento\\Staging\\Plugin\\Store\\Controller\\Store\\SwitchAction',
        'line': 61,
        'file': '\/vendor\/magento\/module-staging\/Plugin\/Store\/Controller\/Store\/SwitchAction.php',
        'origin': {
          'name': 'execute',
          'className': 'Magento\\Store\\Controller\\Store\\SwitchAction',
          'line': 92,
          'file': '\/vendor\/magento\/module-store\/Controller\/Store\/SwitchAction.php'
        }
      }]
    }, {
      'around': [{
        'active': 1,
        'name': 'aroundRegenerateId',
        'className': 'Magento\\Staging\\Plugin\\Customer\\Model\\Session',
        'line': 33,
        'file': '\/vendor\/magento\/module-staging\/Plugin\/Customer\/Model\/Session.php',
        'origin': {
          'name': 'regenerateId',
          'className': 'Magento\\Customer\\Model\\Session',
          'line': 569,
          'file': '\/vendor\/magento\/module-customer\/Model\/Session.php'
        }
      }, {
        'active': 1,
        'name': 'aroundDestroy',
        'className': 'Magento\\Staging\\Plugin\\Customer\\Model\\Session',
        'line': 51,
        'file': '\/vendor\/magento\/module-staging\/Plugin\/Customer\/Model\/Session.php',
        'origin': {
          'name': 'destroy',
          'className': 'Magento\\Customer\\Model\\Session',
          'line': 344,
          'file': '\/vendor\/magento\/module-customer\/Model\/Session.php'
        }
      }]
    }],
    'Magento_AdvancedCheckout': [{
      'after': [{
        'active': 1,
        'name': 'afterGetSectionData',
        'className': 'Magento\\AdvancedCheckout\\Plugin\\Checkout\\CustomerData\\Cart',
        'line': 33,
        'file': '\/vendor\/magento\/module-advanced-checkout\/Plugin\/Checkout\/CustomerData\/Cart.php',
        'origin': {
          'name': 'getSectionData',
          'className': 'Magento\\Checkout\\CustomerData\\Cart',
          'line': 89,
          'file': '\/vendor\/magento\/module-checkout\/CustomerData\/Cart.php'
        }
      }]
    }],
    'Magento_CmsStaging': [{
      'before': [{
        'active': 1,
        'name': 'beforeGetItems',
        'className': 'Magento\\CmsStaging\\Model\\ResourceModel\\Grid\\Collection\\UpdatePlugin',
        'line': 44,
        'file': '\/vendor\/magento\/module-cms-staging\/Model\/ResourceModel\/Grid\/Collection\/UpdatePlugin.php',
        'origin': {
          'name': 'getItems',
          'className': 'Magento\\Cms\\Model\\ResourceModel\\Page\\Grid\\Collection',
          'line': 331,
          'file': '\/vendor\/magento\/module-cms\/Model\/ResourceModel\/Page\/Grid\/Collection.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeGetItems',
        'className': 'Magento\\CmsStaging\\Model\\ResourceModel\\Grid\\Collection\\UpdatePlugin',
        'line': 44,
        'file': '\/vendor\/magento\/module-cms-staging\/Model\/ResourceModel\/Grid\/Collection\/UpdatePlugin.php',
        'origin': {
          'name': 'getItems',
          'className': 'Magento\\Cms\\Model\\ResourceModel\\Block\\Grid\\Collection',
          'line': 331,
          'file': '\/vendor\/magento\/module-cms\/Model\/ResourceModel\/Block\/Grid\/Collection.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeGetSearchResult',
        'className': 'Magento\\CmsStaging\\Ui\\Component\\DataProvider\\UpdatePlugin',
        'line': 54,
        'file': '\/vendor\/magento\/module-cms-staging\/Ui\/Component\/DataProvider\/UpdatePlugin.php',
        'origin': {
          'name': 'getSearchResult',
          'className': 'Magento\\Cms\\Ui\\Component\\DataProvider',
          'line': 311,
          'file': '\/vendor\/magento\/module-cms\/Ui\/Component\/DataProvider.php'
        }
      }]
    }, {
      'around': [{
        'active': 1,
        'name': 'aroundGetData',
        'className': 'Magento\\Staging\\Model\\Entity\\DataProvider\\DataProviderPlugin',
        'line': 52,
        'file': '\/vendor\/magento\/module-staging\/Model\/Entity\/DataProvider\/DataProviderPlugin.php',
        'origin': {
          'name': 'getData',
          'className': 'Magento\\CmsStaging\\Model\\Page\\DataProvider',
          'line': 84,
          'file': '\/vendor\/magento\/module-cms-staging\/Model\/Page\/DataProvider.php'
        }
      }]
    }, {
      'around': [{
        'active': 1,
        'name': 'aroundGetData',
        'className': 'Magento\\Staging\\Model\\Entity\\DataProvider\\DataProviderPlugin',
        'line': 52,
        'file': '\/vendor\/magento\/module-staging\/Model\/Entity\/DataProvider\/DataProviderPlugin.php',
        'origin': {
          'name': 'getData',
          'className': 'Magento\\CmsStaging\\Model\\Block\\DataProvider',
          'line': 64,
          'file': '\/vendor\/magento\/module-cms-staging\/Model\/Block\/DataProvider.php'
        }
      }]
    }, {
      'around': [{
        'active': 1,
        'name': 'aroundGetData',
        'className': 'Magento\\Staging\\Model\\Entity\\DataProvider\\Identifier\\DataProviderPlugin',
        'line': 52,
        'file': '\/vendor\/magento\/module-staging\/Model\/Entity\/DataProvider\/Identifier\/DataProviderPlugin.php',
        'origin': {
          'name': 'getData',
          'className': 'Magento\\CmsStaging\\Model\\Page\\Identifier\\DataProvider',
          'line': 41,
          'file': '\/vendor\/magento\/module-cms-staging\/Model\/Page\/Identifier\/DataProvider.php'
        }
      }]
    }, {
      'around': [{
        'active': 1,
        'name': 'aroundGetData',
        'className': 'Magento\\Staging\\Model\\Entity\\DataProvider\\Identifier\\DataProviderPlugin',
        'line': 52,
        'file': '\/vendor\/magento\/module-staging\/Model\/Entity\/DataProvider\/Identifier\/DataProviderPlugin.php',
        'origin': {
          'name': 'getData',
          'className': 'Magento\\CmsStaging\\Model\\Block\\Identifier\\DataProvider',
          'line': 21,
          'file': '\/vendor\/magento\/module-cms-staging\/Model\/Block\/Identifier\/DataProvider.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeExecute',
        'className': 'Magento\\CmsStaging\\Controller\\Adminhtml\\Page\\Save\\Plugin',
        'line': 31,
        'file': '\/vendor\/magento\/module-cms-staging\/Controller\/Adminhtml\/Page\/Save\/Plugin.php',
        'origin': {
          'name': 'execute',
          'className': 'Magento\\Cms\\Controller\\Adminhtml\\Page\\Save',
          'line': 76,
          'file': '\/vendor\/magento\/module-cms\/Controller\/Adminhtml\/Page\/Save.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeExecute',
        'className': 'Magento\\CmsStaging\\Controller\\Adminhtml\\Page\\Update\\Save\\Plugin',
        'line': 40,
        'file': '\/vendor\/magento\/module-cms-staging\/Controller\/Adminhtml\/Page\/Update\/Save\/Plugin.php',
        'origin': {
          'name': 'execute',
          'className': 'Magento\\CmsStaging\\Controller\\Adminhtml\\Page\\Update\\Save',
          'line': 53,
          'file': '\/vendor\/magento\/module-cms-staging\/Controller\/Adminhtml\/Page\/Update\/Save.php'
        }
      }]
    }],
    'Magento_CmsUrlRewrite': [{
      'before': [{
        'active': 1,
        'name': 'beforeSave',
        'className': 'Magento\\CmsUrlRewrite\\Plugin\\Cms\\Model\\ResourceModel\\Page',
        'line': 53,
        'file': '\/vendor\/magento\/module-cms-url-rewrite\/Plugin\/Cms\/Model\/ResourceModel\/Page.php',
        'origin': {
          'name': 'save',
          'className': 'Magento\\Cms\\Model\\ResourceModel\\Page',
          'line': 398,
          'file': '\/vendor\/magento\/module-cms\/Model\/ResourceModel\/Page.php'
        }
      }],
      'after': [{
        'active': 1,
        'name': 'afterDelete',
        'className': 'Magento\\CmsUrlRewrite\\Plugin\\Cms\\Model\\ResourceModel\\Page',
        'line': 73,
        'file': '\/vendor\/magento\/module-cms-url-rewrite\/Plugin\/Cms\/Model\/ResourceModel\/Page.php',
        'origin': {
          'name': 'delete',
          'className': 'Magento\\Cms\\Model\\ResourceModel\\Page',
          'line': 407,
          'file': '\/vendor\/magento\/module-cms\/Model\/ResourceModel\/Page.php'
        }
      }]
    }],
    'Magento_Integration': [{
      'after': [{
        'active': 1,
        'name': 'afterCreate',
        'className': 'Magento\\Integration\\Model\\Plugin\\Integration',
        'line': 71,
        'file': '\/vendor\/magento\/module-integration\/Model\/Plugin\/Integration.php',
        'origin': {
          'name': 'create',
          'className': 'Magento\\Integration\\Api\\IntegrationServiceInterface',
          'line': 25,
          'file': '\/vendor\/magento\/module-integration\/Api\/IntegrationServiceInterface.php'
        }
      }, {
        'active': 1,
        'name': 'afterUpdate',
        'className': 'Magento\\Integration\\Model\\Plugin\\Integration',
        'line': 89,
        'file': '\/vendor\/magento\/module-integration\/Model\/Plugin\/Integration.php',
        'origin': {
          'name': 'update',
          'className': 'Magento\\Integration\\Api\\IntegrationServiceInterface',
          'line': 67,
          'file': '\/vendor\/magento\/module-integration\/Api\/IntegrationServiceInterface.php'
        }
      }, {
        'active': 1,
        'name': 'afterGet',
        'className': 'Magento\\Integration\\Model\\Plugin\\Integration',
        'line': 107,
        'file': '\/vendor\/magento\/module-integration\/Model\/Plugin\/Integration.php',
        'origin': {
          'name': 'get',
          'className': 'Magento\\Integration\\Api\\IntegrationServiceInterface',
          'line': 34,
          'file': '\/vendor\/magento\/module-integration\/Api\/IntegrationServiceInterface.php'
        }
      }, {
        'active': 1,
        'name': 'afterDelete',
        'className': 'Magento\\Integration\\Model\\Plugin\\Integration',
        'line': 175,
        'file': '\/vendor\/magento\/module-integration\/Model\/Plugin\/Integration.php',
        'origin': {
          'name': 'delete',
          'className': 'Magento\\Integration\\Api\\IntegrationServiceInterface',
          'line': 76,
          'file': '\/vendor\/magento\/module-integration\/Api\/IntegrationServiceInterface.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterSave',
        'className': 'Magento\\Integration\\Plugin\\Model\\AdminUser',
        'line': 38,
        'file': '\/vendor\/magento\/module-integration\/Plugin\/Model\/AdminUser.php',
        'origin': {
          'name': 'save',
          'className': 'Magento\\User\\Model\\User',
          'line': 653,
          'file': '\/vendor\/magento\/module-user\/Model\/User.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterSave',
        'className': 'Magento\\Integration\\Plugin\\Model\\CustomerUser',
        'line': 36,
        'file': '\/vendor\/magento\/module-integration\/Plugin\/Model\/CustomerUser.php',
        'origin': {
          'name': 'save',
          'className': 'Magento\\Customer\\Model\\Customer',
          'line': 653,
          'file': '\/vendor\/magento\/module-customer\/Model\/Customer.php'
        }
      }]
    }],
    'Magento_Reports': [{
      'after': [{
        'active': 1,
        'name': 'afterClean',
        'className': 'Magento\\Reports\\Model\\Plugin\\Log',
        'line': 53,
        'file': '\/vendor\/magento\/module-reports\/Model\/Plugin\/Log.php',
        'origin': {
          'name': 'clean',
          'className': 'Magento\\Customer\\Model\\ResourceModel\\Visitor',
          'line': 73,
          'file': '\/vendor\/magento\/module-customer\/Model\/ResourceModel\/Visitor.php'
        }
      }]
    }],
    'Magento_TargetRule': [{
      'after': [{
        'active': 1,
        'name': 'afterImportSource',
        'className': 'Magento\\TargetRule\\Model\\Indexer\\TargetRule\\Plugin\\Import',
        'line': 47,
        'file': '\/vendor\/magento\/module-target-rule\/Model\/Indexer\/TargetRule\/Plugin\/Import.php',
        'origin': {
          'name': 'importSource',
          'className': 'Magento\\ImportExport\\Model\\Import',
          'line': 464,
          'file': '\/vendor\/magento\/module-import-export\/Model\/Import.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterDelete',
        'className': 'Magento\\TargetRule\\Model\\Indexer\\TargetRule\\Plugin\\Category',
        'line': 43,
        'file': '\/vendor\/magento\/module-target-rule\/Model\/Indexer\/TargetRule\/Plugin\/Category.php',
        'origin': {
          'name': 'delete',
          'className': 'Magento\\Catalog\\Model\\Category',
          'line': 843,
          'file': '\/vendor\/magento\/module-catalog\/Model\/Category.php'
        }
      }, {
        'active': 1,
        'name': 'afterSave',
        'className': 'Magento\\TargetRule\\Model\\Indexer\\TargetRule\\Plugin\\Category',
        'line': 55,
        'file': '\/vendor\/magento\/module-target-rule\/Model\/Indexer\/TargetRule\/Plugin\/Category.php',
        'origin': {
          'name': 'save',
          'className': 'Magento\\Catalog\\Model\\Category',
          'line': 653,
          'file': '\/vendor\/magento\/module-catalog\/Model\/Category.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterDelete',
        'className': 'Magento\\TargetRule\\Model\\Indexer\\TargetRule\\Plugin\\CustomerSegment',
        'line': 43,
        'file': '\/vendor\/magento\/module-target-rule\/Model\/Indexer\/TargetRule\/Plugin\/CustomerSegment.php',
        'origin': {
          'name': 'delete',
          'className': 'Magento\\CustomerSegment\\Model\\Segment',
          'line': 843,
          'file': '\/vendor\/magento\/module-customer-segment\/Model\/Segment.php'
        }
      }, {
        'active': 1,
        'name': 'afterSave',
        'className': 'Magento\\TargetRule\\Model\\Indexer\\TargetRule\\Plugin\\CustomerSegment',
        'line': 55,
        'file': '\/vendor\/magento\/module-target-rule\/Model\/Indexer\/TargetRule\/Plugin\/CustomerSegment.php',
        'origin': {
          'name': 'save',
          'className': 'Magento\\CustomerSegment\\Model\\Segment',
          'line': 653,
          'file': '\/vendor\/magento\/module-customer-segment\/Model\/Segment.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeSave',
        'className': 'Magento\\TargetRule\\Model\\Indexer\\TargetRule\\Plugin\\Store',
        'line': 44,
        'file': '\/vendor\/magento\/module-target-rule\/Model\/Indexer\/TargetRule\/Plugin\/Store.php',
        'origin': {
          'name': 'save',
          'className': 'Magento\\Store\\Model\\ResourceModel\\Store',
          'line': 392,
          'file': '\/vendor\/magento\/module-store\/Model\/ResourceModel\/Store.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeSave',
        'className': 'Magento\\TargetRule\\Model\\Indexer\\TargetRule\\Plugin\\StoreGroup',
        'line': 44,
        'file': '\/vendor\/magento\/module-target-rule\/Model\/Indexer\/TargetRule\/Plugin\/StoreGroup.php',
        'origin': {
          'name': 'save',
          'className': 'Magento\\Store\\Model\\ResourceModel\\Group',
          'line': 392,
          'file': '\/vendor\/magento\/module-store\/Model\/ResourceModel\/Group.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterDelete',
        'className': 'Magento\\TargetRule\\Model\\Indexer\\TargetRule\\Plugin\\AttributeSet',
        'line': 42,
        'file': '\/vendor\/magento\/module-target-rule\/Model\/Indexer\/TargetRule\/Plugin\/AttributeSet.php',
        'origin': {
          'name': 'delete',
          'className': 'Magento\\Eav\\Model\\Entity\\Attribute\\Set',
          'line': 843,
          'file': '\/vendor\/magento\/module-eav\/Model\/Entity\/Attribute\/Set.php'
        }
      }]
    }],
    'Magento_Cron': [{
      'after': [{
        'active': 1,
        'name': 'afterConvert',
        'className': 'Magento\\Cron\\Model\\Backend\\Config\\Structure\\Converter',
        'line': 33,
        'file': '\/vendor\/magento\/module-cron\/Model\/Backend\/Config\/Structure\/Converter.php',
        'origin': {
          'name': 'convert',
          'className': 'Magento\\Config\\Model\\Config\\Structure\\Converter',
          'line': 61,
          'file': '\/vendor\/magento\/module-config\/Model\/Config\/Structure\/Converter.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterConvert',
        'className': 'Magento\\Cron\\Model\\System\\Config\\Initial\\Converter',
        'line': 32,
        'file': '\/vendor\/magento\/module-cron\/Model\/System\/Config\/Initial\/Converter.php',
        'origin': {
          'name': 'convert',
          'className': 'Magento\\Framework\\App\\Config\\Initial\\Converter',
          'line': 41,
          'file': '\/vendor\/magento\/framework\/App\/Config\/Initial\/Converter.php'
        }
      }]
    }],
    'Magento_Analytics': [{
      'after': [{
        'active': 1,
        'name': 'afterAfterSave',
        'className': 'Magento\\Analytics\\Model\\Plugin\\BaseUrlConfigPlugin',
        'line': 40,
        'file': '\/vendor\/magento\/module-analytics\/Model\/Plugin\/BaseUrlConfigPlugin.php',
        'origin': {
          'name': 'afterSave',
          'className': 'Magento\\Config\\Model\\Config\\Backend\\Baseurl',
          'line': 216,
          'file': '\/vendor\/magento\/module-config\/Model\/Config\/Backend\/Baseurl.php'
        }
      }]
    }],
    'Magento_CustomerBalance': [{
      'before': [{
        'active': 1,
        'name': 'beforeCollect',
        'className': 'Magento\\CustomerBalance\\Model\\Plugin\\TotalsCollector',
        'line': 21,
        'file': '\/vendor\/magento\/module-customer-balance\/Model\/Plugin\/TotalsCollector.php',
        'origin': {
          'name': 'collect',
          'className': 'Magento\\Quote\\Model\\Quote\\TotalsCollector',
          'line': 125,
          'file': '\/vendor\/magento\/module-quote\/Model\/Quote\/TotalsCollector.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterGet',
        'className': 'Magento\\CustomerBalance\\Model\\Plugin\\OrderRepository',
        'line': 39,
        'file': '\/vendor\/magento\/module-customer-balance\/Model\/Plugin\/OrderRepository.php',
        'origin': {
          'name': 'get',
          'className': 'Magento\\Sales\\Api\\OrderRepositoryInterface',
          'line': 37,
          'file': '\/vendor\/magento\/module-sales\/Api\/OrderRepositoryInterface.php'
        }
      }, {
        'active': 1,
        'name': 'afterGetList',
        'className': 'Magento\\CustomerBalance\\Model\\Plugin\\OrderRepository',
        'line': 72,
        'file': '\/vendor\/magento\/module-customer-balance\/Model\/Plugin\/OrderRepository.php',
        'origin': {
          'name': 'getList',
          'className': 'Magento\\Sales\\Api\\OrderRepositoryInterface',
          'line': 29,
          'file': '\/vendor\/magento\/module-sales\/Api\/OrderRepositoryInterface.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterGet',
        'className': 'Magento\\CustomerBalance\\Model\\Plugin\\InvoiceRepository',
        'line': 36,
        'file': '\/vendor\/magento\/module-customer-balance\/Model\/Plugin\/InvoiceRepository.php',
        'origin': {
          'name': 'get',
          'className': 'Magento\\Sales\\Api\\InvoiceRepositoryInterface',
          'line': 42,
          'file': '\/vendor\/magento\/module-sales\/Api\/InvoiceRepositoryInterface.php'
        }
      }, {
        'active': 1,
        'name': 'afterGetList',
        'className': 'Magento\\CustomerBalance\\Model\\Plugin\\InvoiceRepository',
        'line': 59,
        'file': '\/vendor\/magento\/module-customer-balance\/Model\/Plugin\/InvoiceRepository.php',
        'origin': {
          'name': 'getList',
          'className': 'Magento\\Sales\\Api\\InvoiceRepositoryInterface',
          'line': 27,
          'file': '\/vendor\/magento\/module-sales\/Api\/InvoiceRepositoryInterface.php'
        }
      }],
      'before': [{
        'active': 1,
        'name': 'beforeSave',
        'className': 'Magento\\CustomerBalance\\Model\\Plugin\\InvoiceRepository',
        'line': 79,
        'file': '\/vendor\/magento\/module-customer-balance\/Model\/Plugin\/InvoiceRepository.php',
        'origin': {
          'name': 'save',
          'className': 'Magento\\Sales\\Api\\InvoiceRepositoryInterface',
          'line': 58,
          'file': '\/vendor\/magento\/module-sales\/Api\/InvoiceRepositoryInterface.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterGet',
        'className': 'Magento\\CustomerBalance\\Model\\Plugin\\CreditmemoRepository',
        'line': 39,
        'file': '\/vendor\/magento\/module-customer-balance\/Model\/Plugin\/CreditmemoRepository.php',
        'origin': {
          'name': 'get',
          'className': 'Magento\\Sales\\Api\\CreditmemoRepositoryInterface',
          'line': 37,
          'file': '\/vendor\/magento\/module-sales\/Api\/CreditmemoRepositoryInterface.php'
        }
      }, {
        'active': 1,
        'name': 'afterGetList',
        'className': 'Magento\\CustomerBalance\\Model\\Plugin\\CreditmemoRepository',
        'line': 62,
        'file': '\/vendor\/magento\/module-customer-balance\/Model\/Plugin\/CreditmemoRepository.php',
        'origin': {
          'name': 'getList',
          'className': 'Magento\\Sales\\Api\\CreditmemoRepositoryInterface',
          'line': 29,
          'file': '\/vendor\/magento\/module-sales\/Api\/CreditmemoRepositoryInterface.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterCanCreditmemo',
        'className': 'Magento\\CustomerBalance\\Plugin\\CreditMemoResolver',
        'line': 39,
        'file': '\/vendor\/magento\/module-customer-balance\/Plugin\/CreditMemoResolver.php',
        'origin': {
          'name': 'canCreditmemo',
          'className': 'Magento\\Sales\\Model\\Order',
          'line': 650,
          'file': '\/vendor\/magento\/module-sales\/Model\/Order.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterRemoveItem',
        'className': 'Magento\\CustomerBalance\\Plugin\\Model\\Quote\\ResetCustomerBalanceUsage',
        'line': 25,
        'file': '\/vendor\/magento\/module-customer-balance\/Plugin\/Model\/Quote\/ResetCustomerBalanceUsage.php',
        'origin': {
          'name': 'removeItem',
          'className': 'Magento\\Quote\\Model\\Quote',
          'line': 1536,
          'file': '\/vendor\/magento\/module-quote\/Model\/Quote.php'
        }
      }]
    }],
    'Magento_CustomerSegment': [{
      'before': [{
        'active': 1,
        'name': 'beforeGenerateXml',
        'className': 'Magento\\CustomerSegment\\Model\\Layout\\DepersonalizePlugin',
        'line': 83,
        'file': '\/vendor\/magento\/module-customer-segment\/Model\/Layout\/DepersonalizePlugin.php',
        'origin': {
          'name': 'generateXml',
          'className': 'Magento\\Framework\\View\\Layout',
          'line': 301,
          'file': '\/vendor\/magento\/framework\/View\/Layout.php'
        }
      }],
      'after': [{
        'active': 1,
        'name': 'afterGenerateXml',
        'className': 'Magento\\CustomerSegment\\Model\\Layout\\DepersonalizePlugin',
        'line': 101,
        'file': '\/vendor\/magento\/module-customer-segment\/Model\/Layout\/DepersonalizePlugin.php',
        'origin': {
          'name': 'generateXml',
          'className': 'Magento\\Framework\\View\\Layout',
          'line': 301,
          'file': '\/vendor\/magento\/framework\/View\/Layout.php'
        }
      }]
    }, {
      'around': [{
        'active': 1,
        'name': 'aroundDispatch',
        'className': 'Magento\\CustomerSegment\\Model\\App\\Action\\ContextPlugin',
        'line': 59,
        'file': '\/vendor\/magento\/module-customer-segment\/Model\/App\/Action\/ContextPlugin.php',
        'origin': {
          'name': 'dispatch',
          'className': 'Magento\\Framework\\App\\Action\\AbstractAction',
          'line': 53,
          'file': '\/vendor\/magento\/framework\/App\/Action\/AbstractAction.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeCollect',
        'className': 'Magento\\CustomerSegment\\Model\\Checkout\\Block\\Cart\\Shipping\\Plugin',
        'line': 55,
        'file': '\/vendor\/magento\/module-customer-segment\/Model\/Checkout\/Block\/Cart\/Shipping\/Plugin.php',
        'origin': {
          'name': 'collect',
          'className': 'Magento\\Checkout\\Model\\Cart\\CollectQuote',
          'line': 69,
          'file': '\/vendor\/magento\/module-checkout\/Model\/Cart\/CollectQuote.php'
        }
      }]
    }],
    'Magento_Vault': [{
      'after': [{
        'active': 1,
        'name': 'afterGetExtensionAttributes',
        'className': 'Magento\\Vault\\Plugin\\PaymentVaultAttributesLoad',
        'line': 50,
        'file': '\/vendor\/magento\/module-vault\/Plugin\/PaymentVaultAttributesLoad.php',
        'origin': {
          'name': 'getExtensionAttributes',
          'className': 'Magento\\Sales\\Api\\Data\\OrderPaymentInterface',
          'line': 1058,
          'file': '\/vendor\/magento\/module-sales\/Api\/Data\/OrderPaymentInterface.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeProcess',
        'className': 'Magento\\Vault\\Plugin\\PaymentVaultConfigurationProcess',
        'line': 53,
        'file': '\/vendor\/magento\/module-vault\/Plugin\/PaymentVaultConfigurationProcess.php',
        'origin': {
          'name': 'process',
          'className': 'Magento\\Checkout\\Block\\Checkout\\LayoutProcessor',
          'line': 150,
          'file': '\/vendor\/magento\/module-checkout\/Block\/Checkout\/LayoutProcessor.php'
        }
      }]
    }],
    'Magento_Deploy': [{
      'before': [{
        'active': 1,
        'name': 'beforeDispatch',
        'className': 'Magento\\Deploy\\Model\\Plugin\\ConfigChangeDetector',
        'line': 47,
        'file': '\/vendor\/magento\/module-deploy\/Model\/Plugin\/ConfigChangeDetector.php',
        'origin': {
          'name': 'dispatch',
          'className': 'Magento\\Framework\\App\\FrontControllerInterface',
          'line': 24,
          'file': '\/vendor\/magento\/framework\/App\/FrontControllerInterface.php'
        }
      }]
    }],
    'Magento_Developer': [{
      'after': [{
        'active': 1,
        'name': 'afterCreate',
        'className': 'Magento\\Developer\\Model\\TemplateEngine\\Plugin\\DebugHints',
        'line': 116,
        'file': '\/vendor\/magento\/module-developer\/Model\/TemplateEngine\/Plugin\/DebugHints.php',
        'origin': {
          'name': 'create',
          'className': 'Magento\\Framework\\View\\TemplateEngineFactory',
          'line': 49,
          'file': '\/vendor\/magento\/framework\/View\/TemplateEngineFactory.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterCreate',
        'className': 'Magento\\Developer\\Model\\TemplateEngine\\Plugin\\DebugHints',
        'line': 116,
        'file': '\/vendor\/magento\/module-developer\/Model\/TemplateEngine\/Plugin\/DebugHints.php',
        'origin': {
          'name': 'create',
          'className': 'Magento\\Framework\\View\\TemplateEngineFactory',
          'line': 49,
          'file': '\/vendor\/magento\/framework\/View\/TemplateEngineFactory.php'
        }
      }]
    }],
    'Magento_Dhl': [{
      'after': [{
        'active': 1,
        'name': 'afterIsStateActive',
        'className': 'Magento\\Dhl\\Model\\Plugin\\Checkout\\Block\\Cart\\Shipping',
        'line': 33,
        'file': '\/vendor\/magento\/module-dhl\/Model\/Plugin\/Checkout\/Block\/Cart\/Shipping.php',
        'origin': {
          'name': 'isStateActive',
          'className': 'Magento\\Checkout\\Block\\Cart\\LayoutProcessor',
          'line': 73,
          'file': '\/vendor\/magento\/module-checkout\/Block\/Cart\/LayoutProcessor.php'
        }
      }, {
        'active': 1,
        'name': 'afterIsCityActive',
        'className': 'Magento\\Dhl\\Model\\Plugin\\Checkout\\Block\\Cart\\Shipping',
        'line': 47,
        'file': '\/vendor\/magento\/module-dhl\/Model\/Plugin\/Checkout\/Block\/Cart\/Shipping.php',
        'origin': {
          'name': 'isCityActive',
          'className': 'Magento\\Checkout\\Block\\Cart\\LayoutProcessor',
          'line': 62,
          'file': '\/vendor\/magento\/module-checkout\/Block\/Cart\/LayoutProcessor.php'
        }
      }]
    }],
    'Magento_Tax': [{
      'before': [{
        'active': 1,
        'name': 'beforeConvert',
        'className': 'Magento\\Tax\\Model\\Quote\\ToOrderConverter',
        'line': 40,
        'file': '\/vendor\/magento\/module-tax\/Model\/Quote\/ToOrderConverter.php',
        'origin': {
          'name': 'convert',
          'className': 'Magento\\Quote\\Model\\Quote\\Address\\ToOrder',
          'line': 63,
          'file': '\/vendor\/magento\/module-quote\/Model\/Quote\/Address\/ToOrder.php'
        }
      }],
      'after': [{
        'active': 1,
        'name': 'afterConvert',
        'className': 'Magento\\Tax\\Model\\Quote\\ToOrderConverter',
        'line': 52,
        'file': '\/vendor\/magento\/module-tax\/Model\/Quote\/ToOrderConverter.php',
        'origin': {
          'name': 'convert',
          'className': 'Magento\\Quote\\Model\\Quote\\Address\\ToOrder',
          'line': 63,
          'file': '\/vendor\/magento\/module-quote\/Model\/Quote\/Address\/ToOrder.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterProcess',
        'className': 'Magento\\Tax\\Model\\Quote\\GrandTotalDetailsPlugin',
        'line': 92,
        'file': '\/vendor\/magento\/module-tax\/Model\/Quote\/GrandTotalDetailsPlugin.php',
        'origin': {
          'name': 'process',
          'className': 'Magento\\Quote\\Model\\Cart\\TotalsConverter',
          'line': 34,
          'file': '\/vendor\/magento\/module-quote\/Model\/Cart\/TotalsConverter.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterSave',
        'className': 'Magento\\Tax\\Model\\Plugin\\OrderSave',
        'line': 44,
        'file': '\/vendor\/magento\/module-tax\/Model\/Plugin\/OrderSave.php',
        'origin': {
          'name': 'save',
          'className': 'Magento\\Sales\\Api\\OrderRepositoryInterface',
          'line': 53,
          'file': '\/vendor\/magento\/module-sales\/Api\/OrderRepositoryInterface.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterGetData',
        'className': 'Magento\\Tax\\Plugin\\Ui\\DataProvider\\TaxSettings',
        'line': 40,
        'file': '\/vendor\/magento\/module-tax\/Plugin\/Ui\/DataProvider\/TaxSettings.php',
        'origin': {
          'name': 'getData',
          'className': 'Magento\\Catalog\\Ui\\DataProvider\\Product\\Listing\\DataProvider',
          'line': 64,
          'file': '\/vendor\/magento\/module-catalog\/Ui\/DataProvider\/Product\/Listing\/DataProvider.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterGetSectionData',
        'className': 'Magento\\Tax\\Plugin\\Checkout\\CustomerData\\Cart',
        'line': 63,
        'file': '\/vendor\/magento\/module-tax\/Plugin\/Checkout\/CustomerData\/Cart.php',
        'origin': {
          'name': 'getSectionData',
          'className': 'Magento\\Checkout\\CustomerData\\Cart',
          'line': 89,
          'file': '\/vendor\/magento\/module-checkout\/CustomerData\/Cart.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeGenerateXml',
        'className': 'Magento\\Tax\\Model\\Layout\\DepersonalizePlugin',
        'line': 59,
        'file': '\/vendor\/magento\/module-tax\/Model\/Layout\/DepersonalizePlugin.php',
        'origin': {
          'name': 'generateXml',
          'className': 'Magento\\Framework\\View\\Layout',
          'line': 301,
          'file': '\/vendor\/magento\/framework\/View\/Layout.php'
        }
      }],
      'after': [{
        'active': 1,
        'name': 'afterGenerateXml',
        'className': 'Magento\\Tax\\Model\\Layout\\DepersonalizePlugin',
        'line': 76,
        'file': '\/vendor\/magento\/module-tax\/Model\/Layout\/DepersonalizePlugin.php',
        'origin': {
          'name': 'generateXml',
          'className': 'Magento\\Framework\\View\\Layout',
          'line': 301,
          'file': '\/vendor\/magento\/framework\/View\/Layout.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeDispatch',
        'className': 'Magento\\Tax\\Model\\App\\Action\\ContextPlugin',
        'line': 80,
        'file': '\/vendor\/magento\/module-tax\/Model\/App\/Action\/ContextPlugin.php',
        'origin': {
          'name': 'dispatch',
          'className': 'Magento\\Framework\\App\\Action\\AbstractAction',
          'line': 53,
          'file': '\/vendor\/magento\/framework\/App\/Action\/AbstractAction.php'
        }
      }]
    }],
    'Magento_Weee': [{
      'after': [{
        'active': 1,
        'name': 'afterGetData',
        'className': 'Magento\\Weee\\Plugin\\Ui\\DataProvider\\WeeeSettings',
        'line': 38,
        'file': '\/vendor\/magento\/module-weee\/Plugin\/Ui\/DataProvider\/WeeeSettings.php',
        'origin': {
          'name': 'getData',
          'className': 'Magento\\Catalog\\Ui\\DataProvider\\Product\\Listing\\DataProvider',
          'line': 64,
          'file': '\/vendor\/magento\/module-catalog\/Ui\/DataProvider\/Product\/Listing\/DataProvider.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterInitializeFromData',
        'className': 'Magento\\Weee\\Plugin\\Catalog\\Controller\\Adminhtml\\Product\\Initialization\\Helper\\ProcessTaxAttribute',
        'line': 43,
        'file': '\/vendor\/magento\/module-weee\/Plugin\/Catalog\/Controller\/Adminhtml\/Product\/Initialization\/Helper\/ProcessTaxAttribute.php',
        'origin': {
          'name': 'initializeFromData',
          'className': 'Magento\\Catalog\\Controller\\Adminhtml\\Product\\Initialization\\Helper',
          'line': 154,
          'file': '\/vendor\/magento\/module-catalog\/Controller\/Adminhtml\/Product\/Initialization\/Helper.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeDispatch',
        'className': 'Magento\\Weee\\Model\\App\\Action\\ContextPlugin',
        'line': 104,
        'file': '\/vendor\/magento\/module-weee\/Model\/App\/Action\/ContextPlugin.php',
        'origin': {
          'name': 'dispatch',
          'className': 'Magento\\Framework\\App\\Action\\AbstractAction',
          'line': 53,
          'file': '\/vendor\/magento\/framework\/App\/Action\/AbstractAction.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterGetSectionData',
        'className': 'Magento\\Weee\\Plugin\\Checkout\\CustomerData\\Cart',
        'line': 63,
        'file': '\/vendor\/magento\/module-weee\/Plugin\/Checkout\/CustomerData\/Cart.php',
        'origin': {
          'name': 'getSectionData',
          'className': 'Magento\\Checkout\\CustomerData\\Cart',
          'line': 89,
          'file': '\/vendor\/magento\/module-checkout\/CustomerData\/Cart.php'
        }
      }]
    }],
    'Magento_CatalogSearch': [{
      'around': [{
        'active': 1,
        'name': 'aroundSave',
        'className': 'Magento\\CatalogSearch\\Model\\Indexer\\Fulltext\\Plugin\\Product',
        'line': 26,
        'file': '\/vendor\/magento\/module-catalog-search\/Model\/Indexer\/Fulltext\/Plugin\/Product.php',
        'origin': {
          'name': 'save',
          'className': 'Magento\\Catalog\\Model\\ResourceModel\\Product',
          'line': 688,
          'file': '\/vendor\/magento\/module-catalog\/Model\/ResourceModel\/Product.php'
        }
      }, {
        'active': 1,
        'name': 'aroundDelete',
        'className': 'Magento\\CatalogSearch\\Model\\Indexer\\Fulltext\\Plugin\\Product',
        'line': 40,
        'file': '\/vendor\/magento\/module-catalog-search\/Model\/Indexer\/Fulltext\/Plugin\/Product.php',
        'origin': {
          'name': 'delete',
          'className': 'Magento\\Catalog\\Model\\ResourceModel\\Product',
          'line': 301,
          'file': '\/vendor\/magento\/module-catalog\/Model\/ResourceModel\/Product.php'
        }
      }]
    }, {
      'around': [{
        'active': 1,
        'name': 'aroundSave',
        'className': 'Magento\\CatalogSearch\\Model\\Indexer\\Fulltext\\Plugin\\Category',
        'line': 26,
        'file': '\/vendor\/magento\/module-catalog-search\/Model\/Indexer\/Fulltext\/Plugin\/Category.php',
        'origin': {
          'name': 'save',
          'className': 'Magento\\Catalog\\Model\\ResourceModel\\Category',
          'line': 1120,
          'file': '\/vendor\/magento\/module-catalog\/Model\/ResourceModel\/Category.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterUpdateAttributes',
        'className': 'Magento\\CatalogSearch\\Model\\Indexer\\Fulltext\\Plugin\\Product\\Action',
        'line': 28,
        'file': '\/vendor\/magento\/module-catalog-search\/Model\/Indexer\/Fulltext\/Plugin\/Product\/Action.php',
        'origin': {
          'name': 'updateAttributes',
          'className': 'Magento\\Catalog\\Model\\Product\\Action',
          'line': 88,
          'file': '\/vendor\/magento\/module-catalog\/Model\/Product\/Action.php'
        }
      }, {
        'active': 1,
        'name': 'afterUpdateWebsites',
        'className': 'Magento\\CatalogSearch\\Model\\Indexer\\Fulltext\\Plugin\\Product\\Action',
        'line': 52,
        'file': '\/vendor\/magento\/module-catalog-search\/Model\/Indexer\/Fulltext\/Plugin\/Product\/Action.php',
        'origin': {
          'name': 'updateWebsites',
          'className': 'Magento\\Catalog\\Model\\Product\\Action',
          'line': 155,
          'file': '\/vendor\/magento\/module-catalog\/Model\/Product\/Action.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeSave',
        'className': 'Magento\\CatalogSearch\\Model\\Indexer\\Fulltext\\Plugin\\Store\\View',
        'line': 32,
        'file': '\/vendor\/magento\/module-catalog-search\/Model\/Indexer\/Fulltext\/Plugin\/Store\/View.php',
        'origin': {
          'name': 'save',
          'className': 'Magento\\Store\\Model\\ResourceModel\\Store',
          'line': 392,
          'file': '\/vendor\/magento\/module-store\/Model\/ResourceModel\/Store.php'
        }
      }],
      'after': [{
        'active': 1,
        'name': 'afterSave',
        'className': 'Magento\\CatalogSearch\\Model\\Indexer\\Fulltext\\Plugin\\Store\\View',
        'line': 46,
        'file': '\/vendor\/magento\/module-catalog-search\/Model\/Indexer\/Fulltext\/Plugin\/Store\/View.php',
        'origin': {
          'name': 'save',
          'className': 'Magento\\Store\\Model\\ResourceModel\\Store',
          'line': 392,
          'file': '\/vendor\/magento\/module-store\/Model\/ResourceModel\/Store.php'
        }
      }, {
        'active': 1,
        'name': 'afterDelete',
        'className': 'Magento\\CatalogSearch\\Model\\Indexer\\Fulltext\\Plugin\\Store\\View',
        'line': 64,
        'file': '\/vendor\/magento\/module-catalog-search\/Model\/Indexer\/Fulltext\/Plugin\/Store\/View.php',
        'origin': {
          'name': 'delete',
          'className': 'Magento\\Store\\Model\\ResourceModel\\Store',
          'line': 443,
          'file': '\/vendor\/magento\/module-store\/Model\/ResourceModel\/Store.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeSave',
        'className': 'Magento\\CatalogSearch\\Model\\Indexer\\Fulltext\\Plugin\\Store\\Group',
        'line': 32,
        'file': '\/vendor\/magento\/module-catalog-search\/Model\/Indexer\/Fulltext\/Plugin\/Store\/Group.php',
        'origin': {
          'name': 'save',
          'className': 'Magento\\Store\\Model\\ResourceModel\\Group',
          'line': 392,
          'file': '\/vendor\/magento\/module-store\/Model\/ResourceModel\/Group.php'
        }
      }],
      'after': [{
        'active': 1,
        'name': 'afterSave',
        'className': 'Magento\\CatalogSearch\\Model\\Indexer\\Fulltext\\Plugin\\Store\\Group',
        'line': 46,
        'file': '\/vendor\/magento\/module-catalog-search\/Model\/Indexer\/Fulltext\/Plugin\/Store\/Group.php',
        'origin': {
          'name': 'save',
          'className': 'Magento\\Store\\Model\\ResourceModel\\Group',
          'line': 392,
          'file': '\/vendor\/magento\/module-store\/Model\/ResourceModel\/Group.php'
        }
      }, {
        'active': 1,
        'name': 'afterDelete',
        'className': 'Magento\\CatalogSearch\\Model\\Indexer\\Fulltext\\Plugin\\Store\\Group',
        'line': 64,
        'file': '\/vendor\/magento\/module-catalog-search\/Model\/Indexer\/Fulltext\/Plugin\/Store\/Group.php',
        'origin': {
          'name': 'delete',
          'className': 'Magento\\Store\\Model\\ResourceModel\\Group',
          'line': 443,
          'file': '\/vendor\/magento\/module-store\/Model\/ResourceModel\/Group.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeSave',
        'className': 'Magento\\CatalogSearch\\Model\\Indexer\\Fulltext\\Plugin\\Attribute',
        'line': 56,
        'file': '\/vendor\/magento\/module-catalog-search\/Model\/Indexer\/Fulltext\/Plugin\/Attribute.php',
        'origin': {
          'name': 'save',
          'className': 'Magento\\Catalog\\Model\\ResourceModel\\Attribute',
          'line': 392,
          'file': '\/vendor\/magento\/module-catalog\/Model\/ResourceModel\/Attribute.php'
        }
      }, {
        'active': 1,
        'name': 'beforeDelete',
        'className': 'Magento\\CatalogSearch\\Model\\Indexer\\Fulltext\\Plugin\\Attribute',
        'line': 100,
        'file': '\/vendor\/magento\/module-catalog-search\/Model\/Indexer\/Fulltext\/Plugin\/Attribute.php',
        'origin': {
          'name': 'delete',
          'className': 'Magento\\Catalog\\Model\\ResourceModel\\Attribute',
          'line': 443,
          'file': '\/vendor\/magento\/module-catalog\/Model\/ResourceModel\/Attribute.php'
        }
      }],
      'after': [{
        'active': 1,
        'name': 'afterSave',
        'className': 'Magento\\CatalogSearch\\Model\\Indexer\\Fulltext\\Plugin\\Attribute',
        'line': 77,
        'file': '\/vendor\/magento\/module-catalog-search\/Model\/Indexer\/Fulltext\/Plugin\/Attribute.php',
        'origin': {
          'name': 'save',
          'className': 'Magento\\Catalog\\Model\\ResourceModel\\Attribute',
          'line': 392,
          'file': '\/vendor\/magento\/module-catalog\/Model\/ResourceModel\/Attribute.php'
        }
      }, {
        'active': 1,
        'name': 'afterDelete',
        'className': 'Magento\\CatalogSearch\\Model\\Indexer\\Fulltext\\Plugin\\Attribute',
        'line': 116,
        'file': '\/vendor\/magento\/module-catalog-search\/Model\/Indexer\/Fulltext\/Plugin\/Attribute.php',
        'origin': {
          'name': 'delete',
          'className': 'Magento\\Catalog\\Model\\ResourceModel\\Attribute',
          'line': 443,
          'file': '\/vendor\/magento\/module-catalog\/Model\/ResourceModel\/Attribute.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterRead',
        'className': 'Magento\\CatalogSearch\\Model\\Search\\ReaderPlugin',
        'line': 37,
        'file': '\/vendor\/magento\/module-catalog-search\/Model\/Search\/ReaderPlugin.php',
        'origin': {
          'name': 'read',
          'className': 'Magento\\Framework\\Search\\Request\\Config\\FilesystemReader',
          'line': 125,
          'file': '\/vendor\/magento\/framework\/Search\/Request\/Config\/FilesystemReader.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterFilter',
        'className': 'Magento\\CatalogSearch\\Model\\Layer\\Search\\Plugin\\CollectionFilter',
        'line': 40,
        'file': '\/vendor\/magento\/module-catalog-search\/Model\/Layer\/Search\/Plugin\/CollectionFilter.php',
        'origin': {
          'name': 'filter',
          'className': 'Magento\\Catalog\\Model\\Layer\\Search\\CollectionFilter',
          'line': 54,
          'file': '\/vendor\/magento\/module-catalog\/Model\/Layer\/Search\/CollectionFilter.php'
        }
      }]
    }, {
      'around': [{
        'active': 1,
        'name': 'aroundGetDataSet',
        'className': 'Magento\\CatalogSearch\\Model\\Adapter\\Mysql\\Plugin\\Aggregation\\Category\\DataProvider',
        'line': 77,
        'file': '\/vendor\/magento\/module-catalog-search\/Model\/Adapter\/Mysql\/Plugin\/Aggregation\/Category\/DataProvider.php',
        'origin': {
          'name': 'getDataSet',
          'className': 'Magento\\CatalogSearch\\Model\\Adapter\\Mysql\\Aggregation\\DataProvider',
          'line': 83,
          'file': '\/vendor\/magento\/module-catalog-search\/Model\/Adapter\/Mysql\/Aggregation\/DataProvider.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeSave',
        'className': 'Magento\\CatalogSearch\\Plugin\\EnableEavIndexer',
        'line': 26,
        'file': '\/vendor\/magento\/module-catalog-search\/Plugin\/EnableEavIndexer.php',
        'origin': {
          'name': 'save',
          'className': 'Magento\\Config\\Model\\Config',
          'line': 177,
          'file': '\/vendor\/magento\/module-config\/Model\/Config.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforePrepareProductIndex',
        'className': 'Magento\\CatalogSearch\\Model\\Indexer\\Plugin\\StockedProductsFilterPlugin',
        'line': 64,
        'file': '\/vendor\/magento\/module-catalog-search\/Model\/Indexer\/Plugin\/StockedProductsFilterPlugin.php',
        'origin': {
          'name': 'prepareProductIndex',
          'className': 'Magento\\CatalogSearch\\Model\\Indexer\\Fulltext\\Action\\DataProvider',
          'line': 547,
          'file': '\/vendor\/magento\/module-catalog-search\/Model\/Indexer\/Fulltext\/Action\/DataProvider.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeSetForm',
        'className': 'Magento\\CatalogSearch\\Block\\Plugin\\FrontTabPlugin',
        'line': 38,
        'file': '\/vendor\/magento\/module-catalog-search\/Block\/Plugin\/FrontTabPlugin.php',
        'origin': {
          'name': 'setForm',
          'className': 'Magento\\Catalog\\Block\\Adminhtml\\Product\\Attribute\\Edit\\Tab\\Front',
          'line': 124,
          'file': '\/vendor\/magento\/module-catalog\/Block\/Adminhtml\/Product\/Attribute\/Edit\/Tab\/Front.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterDelete',
        'className': 'Magento\\CatalogSearch\\Model\\Indexer\\Fulltext\\Model\\Plugin\\Category',
        'line': 39,
        'file': '\/vendor\/magento\/module-catalog-search\/Model\/Indexer\/Fulltext\/Model\/Plugin\/Category.php',
        'origin': {
          'name': 'delete',
          'className': 'Magento\\Catalog\\Model\\ResourceModel\\Category',
          'line': 1103,
          'file': '\/vendor\/magento\/module-catalog\/Model\/ResourceModel\/Category.php'
        }
      }]
    }],
    'Magento_Elasticsearch': [{
      'after': [{
        'active': 1,
        'name': 'afterGetIndexerIdsToRunBefore',
        'className': 'Magento\\Elasticsearch\\Model\\Indexer\\Plugin\\DependencyUpdaterPlugin',
        'line': 48,
        'file': '\/vendor\/magento\/module-elasticsearch\/Model\/Indexer\/Plugin\/DependencyUpdaterPlugin.php',
        'origin': {
          'name': 'getIndexerIdsToRunBefore',
          'className': 'Magento\\Framework\\Indexer\\Config\\DependencyInfoProvider',
          'line': 35,
          'file': '\/vendor\/magento\/framework\/Indexer\/Config\/DependencyInfoProvider.php'
        }
      }, {
        'active': 1,
        'name': 'afterGetIndexerIdsToRunAfter',
        'className': 'Magento\\Elasticsearch\\Model\\Indexer\\Plugin\\DependencyUpdaterPlugin',
        'line': 67,
        'file': '\/vendor\/magento\/module-elasticsearch\/Model\/Indexer\/Plugin\/DependencyUpdaterPlugin.php',
        'origin': {
          'name': 'getIndexerIdsToRunAfter',
          'className': 'Magento\\Framework\\Indexer\\Config\\DependencyInfoProvider',
          'line': 43,
          'file': '\/vendor\/magento\/framework\/Indexer\/Config\/DependencyInfoProvider.php'
        }
      }]
    }],
    'Magento_WebsiteRestriction': [{
      'after': [{
        'active': 1,
        'name': 'afterIsAllowed',
        'className': 'Magento\\WebsiteRestriction\\Model\\Plugin\\CustomerRegistration',
        'line': 32,
        'file': '\/vendor\/magento\/module-website-restriction\/Model\/Plugin\/CustomerRegistration.php',
        'origin': {
          'name': 'isAllowed',
          'className': 'Magento\\Customer\\Model\\Registration',
          'line': 19,
          'file': '\/vendor\/magento\/module-customer\/Model\/Registration.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeCreateAccount',
        'className': 'Magento\\WebsiteRestriction\\Plugin\\Model\\AccountManagement',
        'line': 46,
        'file': '\/vendor\/magento\/module-website-restriction\/Plugin\/Model\/AccountManagement.php',
        'origin': {
          'name': 'createAccount',
          'className': 'Magento\\Customer\\Model\\AccountManagement',
          'line': 816,
          'file': '\/vendor\/magento\/module-customer\/Model\/AccountManagement.php'
        }
      }]
    }],
    'Magento_Email': [{
      'before': [{
        'active': 1,
        'name': 'beforeSendMessage',
        'className': 'Magento\\Email\\Model\\Plugin\\WindowsSmtpConfig',
        'line': 52,
        'file': '\/vendor\/magento\/module-email\/Model\/Plugin\/WindowsSmtpConfig.php',
        'origin': {
          'name': 'sendMessage',
          'className': 'Magento\\Framework\\Mail\\TransportInterface',
          'line': 22,
          'file': '\/vendor\/magento\/framework\/Mail\/TransportInterface.php'
        }
      }]
    }],
    'Magento_Enterprise': [{
      'after': [{
        'active': 1,
        'name': 'afterGetHintUrl',
        'className': 'Magento\\Enterprise\\Model\\Plugin\\StoreSwitcher',
        'line': 28,
        'file': '\/vendor\/magento\/module-enterprise\/Model\/Plugin\/StoreSwitcher.php',
        'origin': {
          'name': 'getHintUrl',
          'className': 'Magento\\Backend\\Block\\Store\\Switcher',
          'line': 574,
          'file': '\/vendor\/magento\/module-backend\/Block\/Store\/Switcher.php'
        }
      }]
    }],
    'Magento_Fedex': [{
      'after': [{
        'active': 1,
        'name': 'afterGetTitle',
        'className': 'Magento\\Fedex\\Plugin\\Block\\DataProviders\\Tracking\\ChangeTitle',
        'line': 27,
        'file': '\/vendor\/magento\/module-fedex\/Plugin\/Block\/DataProviders\/Tracking\/ChangeTitle.php',
        'origin': {
          'name': 'getTitle',
          'className': 'Magento\\Shipping\\Block\\DataProviders\\Tracking\\DeliveryDateTitle',
          'line': 23,
          'file': '\/vendor\/magento\/module-shipping\/Block\/DataProviders\/Tracking\/DeliveryDateTitle.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterFormatDeliveryDateTime',
        'className': 'Magento\\Fedex\\Plugin\\Block\\Tracking\\PopupDeliveryDate',
        'line': 28,
        'file': '\/vendor\/magento\/module-fedex\/Plugin\/Block\/Tracking\/PopupDeliveryDate.php',
        'origin': {
          'name': 'formatDeliveryDateTime',
          'className': 'Magento\\Shipping\\Block\\Tracking\\Popup',
          'line': 68,
          'file': '\/vendor\/magento\/module-shipping\/Block\/Tracking\/Popup.php'
        }
      }]
    }],
    'Magento_GiftRegistry': [{
      'before': [{
        'active': 1,
        'name': 'beforeSaveAddressInformation',
        'className': 'Magento\\GiftRegistry\\Model\\Plugin\\SaveAddress',
        'line': 40,
        'file': '\/vendor\/magento\/module-gift-registry\/Model\/Plugin\/SaveAddress.php',
        'origin': {
          'name': 'saveAddressInformation',
          'className': 'Magento\\Checkout\\Api\\ShippingInformationManagementInterface',
          'line': 20,
          'file': '\/vendor\/magento\/module-checkout\/Api\/ShippingInformationManagementInterface.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterConvert',
        'className': 'Magento\\GiftRegistry\\Model\\Plugin\\QuoteItem',
        'line': 29,
        'file': '\/vendor\/magento\/module-gift-registry\/Model\/Plugin\/QuoteItem.php',
        'origin': {
          'name': 'convert',
          'className': 'Magento\\Quote\\Model\\Quote\\Item\\ToOrderItem',
          'line': 57,
          'file': '\/vendor\/magento\/module-quote\/Model\/Quote\/Item\/ToOrderItem.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterConvert',
        'className': 'Magento\\GiftRegistry\\Model\\Plugin\\ConvertQuoteAddressToOrderAddress',
        'line': 28,
        'file': '\/vendor\/magento\/module-gift-registry\/Model\/Plugin\/ConvertQuoteAddressToOrderAddress.php',
        'origin': {
          'name': 'convert',
          'className': 'Magento\\Quote\\Model\\Quote\\Address\\ToOrderAddress',
          'line': 54,
          'file': '\/vendor\/magento\/module-quote\/Model\/Quote\/Address\/ToOrderAddress.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterGetName',
        'className': 'Magento\\GiftRegistry\\Model\\Plugin\\OrderAddressName',
        'line': 23,
        'file': '\/vendor\/magento\/module-gift-registry\/Model\/Plugin\/OrderAddressName.php',
        'origin': {
          'name': 'getName',
          'className': 'Magento\\Sales\\Model\\Order\\Address',
          'line': 141,
          'file': '\/vendor\/magento\/module-sales\/Model\/Order\/Address.php'
        }
      }]
    }],
    'Magento_GiftCardAccount': [{
      'before': [{
        'active': 1,
        'name': 'beforeExecute',
        'className': 'Magento\\GiftCardAccount\\Controller\\Adminhtml\\Order\\Edit\\Plugin',
        'line': 59,
        'file': '\/vendor\/magento\/module-gift-card-account\/Controller\/Adminhtml\/Order\/Edit\/Plugin.php',
        'origin': {
          'name': 'execute',
          'className': 'Magento\\Sales\\Controller\\Adminhtml\\Order\\Edit\\Index',
          'line': 22,
          'file': '\/vendor\/magento\/module-sales\/Controller\/Adminhtml\/Order\/Edit\/Index.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterProcess',
        'className': 'Magento\\GiftCardAccount\\Model\\Plugin\\TotalsConverter',
        'line': 58,
        'file': '\/vendor\/magento\/module-gift-card-account\/Model\/Plugin\/TotalsConverter.php',
        'origin': {
          'name': 'process',
          'className': 'Magento\\Quote\\Model\\Cart\\TotalsConverter',
          'line': 34,
          'file': '\/vendor\/magento\/module-quote\/Model\/Cart\/TotalsConverter.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeCollect',
        'className': 'Magento\\GiftCardAccount\\Model\\Plugin\\TotalsCollector',
        'line': 57,
        'file': '\/vendor\/magento\/module-gift-card-account\/Model\/Plugin\/TotalsCollector.php',
        'origin': {
          'name': 'collect',
          'className': 'Magento\\Quote\\Model\\Quote\\TotalsCollector',
          'line': 125,
          'file': '\/vendor\/magento\/module-quote\/Model\/Quote\/TotalsCollector.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterGet',
        'className': 'Magento\\GiftCardAccount\\Model\\Plugin\\OrderRepository',
        'line': 60,
        'file': '\/vendor\/magento\/module-gift-card-account\/Model\/Plugin\/OrderRepository.php',
        'origin': {
          'name': 'get',
          'className': 'Magento\\Sales\\Api\\OrderRepositoryInterface',
          'line': 37,
          'file': '\/vendor\/magento\/module-sales\/Api\/OrderRepositoryInterface.php'
        }
      }, {
        'active': 1,
        'name': 'afterGetList',
        'className': 'Magento\\GiftCardAccount\\Model\\Plugin\\OrderRepository',
        'line': 95,
        'file': '\/vendor\/magento\/module-gift-card-account\/Model\/Plugin\/OrderRepository.php',
        'origin': {
          'name': 'getList',
          'className': 'Magento\\Sales\\Api\\OrderRepositoryInterface',
          'line': 29,
          'file': '\/vendor\/magento\/module-sales\/Api\/OrderRepositoryInterface.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterGet',
        'className': 'Magento\\GiftCardAccount\\Model\\Plugin\\InvoiceRepository',
        'line': 35,
        'file': '\/vendor\/magento\/module-gift-card-account\/Model\/Plugin\/InvoiceRepository.php',
        'origin': {
          'name': 'get',
          'className': 'Magento\\Sales\\Api\\InvoiceRepositoryInterface',
          'line': 42,
          'file': '\/vendor\/magento\/module-sales\/Api\/InvoiceRepositoryInterface.php'
        }
      }, {
        'active': 1,
        'name': 'afterGetList',
        'className': 'Magento\\GiftCardAccount\\Model\\Plugin\\InvoiceRepository',
        'line': 60,
        'file': '\/vendor\/magento\/module-gift-card-account\/Model\/Plugin\/InvoiceRepository.php',
        'origin': {
          'name': 'getList',
          'className': 'Magento\\Sales\\Api\\InvoiceRepositoryInterface',
          'line': 27,
          'file': '\/vendor\/magento\/module-sales\/Api\/InvoiceRepositoryInterface.php'
        }
      }],
      'before': [{
        'active': 1,
        'name': 'beforeSave',
        'className': 'Magento\\GiftCardAccount\\Model\\Plugin\\InvoiceRepository',
        'line': 83,
        'file': '\/vendor\/magento\/module-gift-card-account\/Model\/Plugin\/InvoiceRepository.php',
        'origin': {
          'name': 'save',
          'className': 'Magento\\Sales\\Api\\InvoiceRepositoryInterface',
          'line': 58,
          'file': '\/vendor\/magento\/module-sales\/Api\/InvoiceRepositoryInterface.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterGet',
        'className': 'Magento\\GiftCardAccount\\Model\\Plugin\\CreditmemoRepository',
        'line': 123,
        'file': '\/vendor\/magento\/module-gift-card-account\/Model\/Plugin\/CreditmemoRepository.php',
        'origin': {
          'name': 'get',
          'className': 'Magento\\Sales\\Api\\CreditmemoRepositoryInterface',
          'line': 37,
          'file': '\/vendor\/magento\/module-sales\/Api\/CreditmemoRepositoryInterface.php'
        }
      }, {
        'active': 1,
        'name': 'afterGetList',
        'className': 'Magento\\GiftCardAccount\\Model\\Plugin\\CreditmemoRepository',
        'line': 145,
        'file': '\/vendor\/magento\/module-gift-card-account\/Model\/Plugin\/CreditmemoRepository.php',
        'origin': {
          'name': 'getList',
          'className': 'Magento\\Sales\\Api\\CreditmemoRepositoryInterface',
          'line': 29,
          'file': '\/vendor\/magento\/module-sales\/Api\/CreditmemoRepositoryInterface.php'
        }
      }, {
        'active': 1,
        'name': 'afterSave',
        'className': 'Magento\\GiftCardAccount\\Model\\Plugin\\CreditmemoRepository',
        'line': 165,
        'file': '\/vendor\/magento\/module-gift-card-account\/Model\/Plugin\/CreditmemoRepository.php',
        'origin': {
          'name': 'save',
          'className': 'Magento\\Sales\\Api\\CreditmemoRepositoryInterface',
          'line': 60,
          'file': '\/vendor\/magento\/module-sales\/Api\/CreditmemoRepositoryInterface.php'
        }
      }]
    }],
    'Magento_CatalogStaging': [{
      'before': [{
        'active': 1,
        'name': 'beforeSave',
        'className': 'Magento\\CatalogStaging\\Api\\Plugin\\ProductCustomOptionRepository',
        'line': 47,
        'file': '\/vendor\/magento\/module-catalog-staging\/Api\/Plugin\/ProductCustomOptionRepository.php',
        'origin': {
          'name': 'save',
          'className': 'Magento\\Catalog\\Api\\ProductCustomOptionRepositoryInterface',
          'line': 70,
          'file': '\/vendor\/magento\/module-catalog\/Api\/ProductCustomOptionRepositoryInterface.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeLoad',
        'className': 'Magento\\CatalogStaging\\Model\\Plugin\\ResourceModel\\Product\\JoinProductsWhenFlatEnabled',
        'line': 38,
        'file': '\/vendor\/magento\/module-catalog-staging\/Model\/Plugin\/ResourceModel\/Product\/JoinProductsWhenFlatEnabled.php',
        'origin': {
          'name': 'load',
          'className': 'Magento\\Catalog\\Model\\ResourceModel\\Product\\Collection',
          'line': 816,
          'file': '\/vendor\/magento\/module-catalog\/Model\/ResourceModel\/Product\/Collection.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterGetFlatColumnsDdlDefinition',
        'className': 'Magento\\CatalogStaging\\Plugin\\Helper\\Product\\Flat\\FlatColumnsDefinition',
        'line': 38,
        'file': '\/vendor\/magento\/module-catalog-staging\/Plugin\/Helper\/Product\/Flat\/FlatColumnsDefinition.php',
        'origin': {
          'name': 'getFlatColumnsDdlDefinition',
          'className': 'Magento\\Catalog\\Helper\\Product\\Flat\\Indexer',
          'line': 172,
          'file': '\/vendor\/magento\/module-catalog\/Helper\/Product\/Flat\/Indexer.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterGetTable',
        'className': 'Magento\\CatalogStaging\\Plugin\\Model\\Indexer\\Product\\Flat\\Table\\Builder',
        'line': 48,
        'file': '\/vendor\/magento\/module-catalog-staging\/Plugin\/Model\/Indexer\/Product\/Flat\/Table\/Builder.php',
        'origin': {
          'name': 'getTable',
          'className': 'Magento\\Catalog\\Model\\Indexer\\Product\\Flat\\Table\\BuilderInterface',
          'line': 44,
          'file': '\/vendor\/magento\/module-catalog\/Model\/Indexer\/Product\/Flat\/Table\/BuilderInterface.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterIsUsingPriceIndex',
        'className': 'Magento\\CatalogStaging\\Model\\Plugin\\ResourceModel\\Product\\Collection\\ProductLimitation',
        'line': 34,
        'file': '\/vendor\/magento\/module-catalog-staging\/Model\/Plugin\/ResourceModel\/Product\/Collection\/ProductLimitation.php',
        'origin': {
          'name': 'isUsingPriceIndex',
          'className': 'Magento\\Catalog\\Model\\ResourceModel\\Product\\Collection\\ProductLimitation',
          'line': 134,
          'file': '\/vendor\/magento\/module-catalog\/Model\/ResourceModel\/Product\/Collection\/ProductLimitation.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterIsScheduled',
        'className': 'Magento\\CatalogStaging\\Helper\\Indexer',
        'line': 37,
        'file': '\/vendor\/magento\/module-catalog-staging\/Helper\/Indexer.php',
        'origin': {
          'name': 'isScheduled',
          'className': 'Magento\\Indexer\\Model\\Indexer',
          'line': 277,
          'file': '\/vendor\/magento\/module-indexer\/Model\/Indexer.php'
        }
      }]
    }, {
      'around': [{
        'active': 1,
        'name': 'aroundIsAvailable',
        'className': 'Magento\\CatalogStaging\\Plugin\\Catalog\\Model\\Indexer\\AbstractFlatState',
        'line': 38,
        'file': '\/vendor\/magento\/module-catalog-staging\/Plugin\/Catalog\/Model\/Indexer\/AbstractFlatState.php',
        'origin': {
          'name': 'isAvailable',
          'className': 'Magento\\Catalog\\Model\\Indexer\\AbstractFlatState',
          'line': 71,
          'file': '\/vendor\/magento\/module-catalog\/Model\/Indexer\/AbstractFlatState.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeExecute',
        'className': 'Magento\\CatalogStaging\\Model\\Plugin\\Controller\\View',
        'line': 82,
        'file': '\/vendor\/magento\/module-catalog-staging\/Model\/Plugin\/Controller\/View.php',
        'origin': {
          'name': 'execute',
          'className': 'Magento\\Catalog\\Controller\\Category\\View',
          'line': 181,
          'file': '\/vendor\/magento\/module-catalog\/Controller\/Category\/View.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeLoad',
        'className': 'Magento\\CatalogStaging\\Model\\Plugin\\ResourceModel\\Product\\Fulltext\\Collection',
        'line': 49,
        'file': '\/vendor\/magento\/module-catalog-staging\/Model\/Plugin\/ResourceModel\/Product\/Fulltext\/Collection.php',
        'origin': {
          'name': 'load',
          'className': 'Magento\\CatalogSearch\\Model\\ResourceModel\\Fulltext\\Collection',
          'line': 816,
          'file': '\/vendor\/magento\/module-catalog-search\/Model\/ResourceModel\/Fulltext\/Collection.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeSave',
        'className': 'Magento\\CatalogStaging\\Plugin\\Api\\DateRangeDesignUpdateCategorySavePlugin',
        'line': 52,
        'file': '\/vendor\/magento\/module-catalog-staging\/Plugin\/Api\/DateRangeDesignUpdateCategorySavePlugin.php',
        'origin': {
          'name': 'save',
          'className': 'Magento\\Catalog\\Api\\CategoryRepositoryInterface',
          'line': 23,
          'file': '\/vendor\/magento\/module-catalog\/Api\/CategoryRepositoryInterface.php'
        }
      }]
    }, {
      'around': [{
        'active': 1,
        'name': 'aroundSubtractProductFromQuotes',
        'className': 'Magento\\CatalogStaging\\Plugin\\Quote\\SubstractProductFromQuotes',
        'line': 32,
        'file': '\/vendor\/magento\/module-catalog-staging\/Plugin\/Quote\/SubstractProductFromQuotes.php',
        'origin': {
          'name': 'subtractProductFromQuotes',
          'className': 'Magento\\Quote\\Model\\ResourceModel\\Quote',
          'line': 212,
          'file': '\/vendor\/magento\/module-quote\/Model\/ResourceModel\/Quote.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeSetCurrentVersionId',
        'className': 'Magento\\CatalogStaging\\Plugin\\Staging\\Model\\VersionManager',
        'line': 32,
        'file': '\/vendor\/magento\/module-catalog-staging\/Plugin\/Staging\/Model\/VersionManager.php',
        'origin': {
          'name': 'setCurrentVersionId',
          'className': 'Magento\\Staging\\Model\\VersionManager',
          'line': 97,
          'file': '\/vendor\/magento\/module-staging\/Model\/VersionManager.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterGetCacheKey',
        'className': 'Magento\\CatalogStaging\\Plugin\\Catalog\\Pricing\\Render\\PriceBox',
        'line': 37,
        'file': '\/vendor\/magento\/module-catalog-staging\/Plugin\/Catalog\/Pricing\/Render\/PriceBox.php',
        'origin': {
          'name': 'getCacheKey',
          'className': 'Magento\\Framework\\Pricing\\Render\\PriceBox',
          'line': 75,
          'file': '\/vendor\/magento\/framework\/Pricing\/Render\/PriceBox.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterGetData',
        'className': 'Magento\\CatalogStaging\\Plugin\\Catalog\\Model\\Category\\DataProvider\\TrimData',
        'line': 16,
        'file': '\/vendor\/magento\/module-catalog-staging\/Plugin\/Catalog\/Model\/Category\/DataProvider\/TrimData.php',
        'origin': {
          'name': 'getData',
          'className': 'Magento\\Catalog\\Model\\Category\\DataProvider',
          'line': 321,
          'file': '\/vendor\/magento\/module-catalog\/Model\/Category\/DataProvider.php'
        }
      }]
    }, {
      'around': [{
        'active': 1,
        'name': 'aroundGetData',
        'className': 'Magento\\Staging\\Model\\Entity\\DataProvider\\DataProviderPlugin',
        'line': 52,
        'file': '\/vendor\/magento\/module-staging\/Model\/Entity\/DataProvider\/DataProviderPlugin.php',
        'origin': {
          'name': 'getData',
          'className': 'Magento\\CatalogStaging\\Model\\Product\\DataProvider',
          'line': 53,
          'file': '\/vendor\/magento\/module-catalog-staging\/Model\/Product\/DataProvider.php'
        }
      }]
    }, {
      'around': [{
        'active': 1,
        'name': 'aroundGetData',
        'className': 'Magento\\Staging\\Model\\Entity\\DataProvider\\Identifier\\DataProviderPlugin',
        'line': 52,
        'file': '\/vendor\/magento\/module-staging\/Model\/Entity\/DataProvider\/Identifier\/DataProviderPlugin.php',
        'origin': {
          'name': 'getData',
          'className': 'Magento\\CatalogStaging\\Model\\Product\\Identifier\\DataProvider',
          'line': 45,
          'file': '\/vendor\/magento\/module-catalog-staging\/Model\/Product\/Identifier\/DataProvider.php'
        }
      }]
    }, {
      'around': [{
        'active': 1,
        'name': 'aroundGetData',
        'className': 'Magento\\Staging\\Model\\Entity\\DataProvider\\DataProviderPlugin',
        'line': 52,
        'file': '\/vendor\/magento\/module-staging\/Model\/Entity\/DataProvider\/DataProviderPlugin.php',
        'origin': {
          'name': 'getData',
          'className': 'Magento\\CatalogStaging\\Model\\Category\\DataProvider',
          'line': 321,
          'file': '\/vendor\/magento\/module-catalog-staging\/Model\/Category\/DataProvider.php'
        }
      }]
    }, {
      'around': [{
        'active': 1,
        'name': 'aroundGetData',
        'className': 'Magento\\Staging\\Model\\Entity\\DataProvider\\Identifier\\DataProviderPlugin',
        'line': 52,
        'file': '\/vendor\/magento\/module-staging\/Model\/Entity\/DataProvider\/Identifier\/DataProviderPlugin.php',
        'origin': {
          'name': 'getData',
          'className': 'Magento\\CatalogStaging\\Model\\Category\\Identifier\\DataProvider',
          'line': 51,
          'file': '\/vendor\/magento\/module-catalog-staging\/Model\/Category\/Identifier\/DataProvider.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterIsForbiddenToDelete',
        'className': 'Magento\\CatalogStaging\\Plugin\\Model\\ResourceModel\\Category',
        'line': 38,
        'file': '\/vendor\/magento\/module-catalog-staging\/Plugin\/Model\/ResourceModel\/Category.php',
        'origin': {
          'name': 'isForbiddenToDelete',
          'className': 'Magento\\Catalog\\Model\\ResourceModel\\Category',
          'line': 905,
          'file': '\/vendor\/magento\/module-catalog\/Model\/ResourceModel\/Category.php'
        }
      }],
      'around': [{
        'active': 1,
        'name': 'aroundDeleteChildren',
        'className': 'Magento\\CatalogStaging\\Plugin\\Model\\ResourceModel\\Category',
        'line': 54,
        'file': '\/vendor\/magento\/module-catalog-staging\/Plugin\/Model\/ResourceModel\/Category.php',
        'origin': {
          'name': 'deleteChildren',
          'className': 'Magento\\Catalog\\Model\\ResourceModel\\Category',
          'line': 245,
          'file': '\/vendor\/magento\/module-catalog\/Model\/ResourceModel\/Category.php'
        }
      }]
    }, {
      'around': [{
        'active': 1,
        'name': 'aroundProcessDelete',
        'className': 'Magento\\CatalogStaging\\Plugin\\Model\\ResourceModel\\Category\\AggregateCount',
        'line': 35,
        'file': '\/vendor\/magento\/module-catalog-staging\/Plugin\/Model\/ResourceModel\/Category\/AggregateCount.php',
        'origin': {
          'name': 'processDelete',
          'className': 'Magento\\Catalog\\Model\\ResourceModel\\Category\\AggregateCount',
          'line': 19,
          'file': '\/vendor\/magento\/module-catalog\/Model\/ResourceModel\/Category\/AggregateCount.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeUpdateAttributes',
        'className': 'Magento\\CatalogStaging\\Model\\Plugin\\Model\\Product\\ActionPlugin',
        'line': 54,
        'file': '\/vendor\/magento\/module-catalog-staging\/Model\/Plugin\/Model\/Product\/ActionPlugin.php',
        'origin': {
          'name': 'updateAttributes',
          'className': 'Magento\\Catalog\\Model\\Product\\Action',
          'line': 88,
          'file': '\/vendor\/magento\/module-catalog\/Model\/Product\/Action.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterGetExcludedFields',
        'className': 'Magento\\CatalogStaging\\Block\\Adminhtml\\Product\\Plugin\\AttributesEditPlugin',
        'line': 37,
        'file': '\/vendor\/magento\/module-catalog-staging\/Block\/Adminhtml\/Product\/Plugin\/AttributesEditPlugin.php',
        'origin': {
          'name': 'getExcludedFields',
          'className': 'Magento\\Catalog\\Block\\Adminhtml\\Product\\Edit\\Action\\Attribute\\Tab\\Attributes',
          'line': 199,
          'file': '\/vendor\/magento\/module-catalog\/Block\/Adminhtml\/Product\/Edit\/Action\/Attribute\/Tab\/Attributes.php'
        }
      }]
    }],
    'Magento_GiftMessage': [{
      'after': [{
        'active': 1,
        'name': 'afterConvert',
        'className': 'Magento\\GiftMessage\\Model\\Plugin\\QuoteItem',
        'line': 38,
        'file': '\/vendor\/magento\/module-gift-message\/Model\/Plugin\/QuoteItem.php',
        'origin': {
          'name': 'convert',
          'className': 'Magento\\Quote\\Model\\Quote\\Item\\ToOrderItem',
          'line': 57,
          'file': '\/vendor\/magento\/module-quote\/Model\/Quote\/Item\/ToOrderItem.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterSave',
        'className': 'Magento\\GiftMessage\\Model\\Plugin\\OrderSave',
        'line': 47,
        'file': '\/vendor\/magento\/module-gift-message\/Model\/Plugin\/OrderSave.php',
        'origin': {
          'name': 'save',
          'className': 'Magento\\Sales\\Api\\OrderRepositoryInterface',
          'line': 53,
          'file': '\/vendor\/magento\/module-sales\/Api\/OrderRepositoryInterface.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterConvert',
        'className': 'Magento\\GiftMessage\\Model\\Plugin\\QuoteItem',
        'line': 38,
        'file': '\/vendor\/magento\/module-gift-message\/Model\/Plugin\/QuoteItem.php',
        'origin': {
          'name': 'convert',
          'className': 'Magento\\Quote\\Model\\Quote\\Item\\ToOrderItem',
          'line': 57,
          'file': '\/vendor\/magento\/module-quote\/Model\/Quote\/Item\/ToOrderItem.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterGetItemsBoxTextAfter',
        'className': 'Magento\\GiftMessage\\Block\\Message\\Multishipping\\Plugin\\ItemsBox',
        'line': 44,
        'file': '\/vendor\/magento\/module-gift-message\/Block\/Message\/Multishipping\/Plugin\/ItemsBox.php',
        'origin': {
          'name': 'getItemsBoxTextAfter',
          'className': 'Magento\\Multishipping\\Block\\Checkout\\Shipping',
          'line': 212,
          'file': '\/vendor\/magento\/module-multishipping\/Block\/Checkout\/Shipping.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterSaveShippingMethod',
        'className': 'Magento\\GiftMessage\\Model\\Type\\Plugin\\Onepage',
        'line': 43,
        'file': '\/vendor\/magento\/module-gift-message\/Model\/Type\/Plugin\/Onepage.php',
        'origin': {
          'name': 'saveShippingMethod',
          'className': 'Magento\\Checkout\\Model\\Type\\Onepage',
          'line': 479,
          'file': '\/vendor\/magento\/module-checkout\/Model\/Type\/Onepage.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeSetShippingMethods',
        'className': 'Magento\\GiftMessage\\Model\\Type\\Plugin\\Multishipping',
        'line': 38,
        'file': '\/vendor\/magento\/module-gift-message\/Model\/Type\/Plugin\/Multishipping.php',
        'origin': {
          'name': 'setShippingMethods',
          'className': 'Magento\\Multishipping\\Model\\Checkout\\Type\\Multishipping',
          'line': 615,
          'file': '\/vendor\/magento\/module-multishipping\/Model\/Checkout\/Type\/Multishipping.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterMerge',
        'className': 'Magento\\GiftMessage\\Model\\Plugin\\MergeQuoteItems',
        'line': 26,
        'file': '\/vendor\/magento\/module-gift-message\/Model\/Plugin\/MergeQuoteItems.php',
        'origin': {
          'name': 'merge',
          'className': 'Magento\\Quote\\Model\\Quote\\Item\\Processor',
          'line': 115,
          'file': '\/vendor\/magento\/module-quote\/Model\/Quote\/Item\/Processor.php'
        }
      }]
    }],
    'Magento_GiftWrapping': [{
      'after': [{
        'active': 1,
        'name': 'afterGet',
        'className': 'Magento\\GiftWrapping\\Model\\Plugin\\OrderGiftWrapping',
        'line': 40,
        'file': '\/vendor\/magento\/module-gift-wrapping\/Model\/Plugin\/OrderGiftWrapping.php',
        'origin': {
          'name': 'get',
          'className': 'Magento\\Sales\\Api\\OrderRepositoryInterface',
          'line': 37,
          'file': '\/vendor\/magento\/module-sales\/Api\/OrderRepositoryInterface.php'
        }
      }, {
        'active': 1,
        'name': 'afterGetList',
        'className': 'Magento\\GiftWrapping\\Model\\Plugin\\OrderGiftWrapping',
        'line': 107,
        'file': '\/vendor\/magento\/module-gift-wrapping\/Model\/Plugin\/OrderGiftWrapping.php',
        'origin': {
          'name': 'getList',
          'className': 'Magento\\Sales\\Api\\OrderRepositoryInterface',
          'line': 29,
          'file': '\/vendor\/magento\/module-sales\/Api\/OrderRepositoryInterface.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterGet',
        'className': 'Magento\\GiftWrapping\\Model\\Plugin\\CreditMemoGiftWrapping',
        'line': 40,
        'file': '\/vendor\/magento\/module-gift-wrapping\/Model\/Plugin\/CreditMemoGiftWrapping.php',
        'origin': {
          'name': 'get',
          'className': 'Magento\\Sales\\Api\\CreditmemoRepositoryInterface',
          'line': 37,
          'file': '\/vendor\/magento\/module-sales\/Api\/CreditmemoRepositoryInterface.php'
        }
      }, {
        'active': 1,
        'name': 'afterGetList',
        'className': 'Magento\\GiftWrapping\\Model\\Plugin\\CreditMemoGiftWrapping',
        'line': 74,
        'file': '\/vendor\/magento\/module-gift-wrapping\/Model\/Plugin\/CreditMemoGiftWrapping.php',
        'origin': {
          'name': 'getList',
          'className': 'Magento\\Sales\\Api\\CreditmemoRepositoryInterface',
          'line': 29,
          'file': '\/vendor\/magento\/module-sales\/Api\/CreditmemoRepositoryInterface.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterGet',
        'className': 'Magento\\GiftWrapping\\Model\\Plugin\\InvoiceGiftWrapping',
        'line': 40,
        'file': '\/vendor\/magento\/module-gift-wrapping\/Model\/Plugin\/InvoiceGiftWrapping.php',
        'origin': {
          'name': 'get',
          'className': 'Magento\\Sales\\Api\\InvoiceRepositoryInterface',
          'line': 42,
          'file': '\/vendor\/magento\/module-sales\/Api\/InvoiceRepositoryInterface.php'
        }
      }, {
        'active': 1,
        'name': 'afterGetList',
        'className': 'Magento\\GiftWrapping\\Model\\Plugin\\InvoiceGiftWrapping',
        'line': 74,
        'file': '\/vendor\/magento\/module-gift-wrapping\/Model\/Plugin\/InvoiceGiftWrapping.php',
        'origin': {
          'name': 'getList',
          'className': 'Magento\\Sales\\Api\\InvoiceRepositoryInterface',
          'line': 27,
          'file': '\/vendor\/magento\/module-sales\/Api\/InvoiceRepositoryInterface.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterProcess',
        'className': 'Magento\\GiftWrapping\\Model\\Plugin\\TotalsConverter',
        'line': 48,
        'file': '\/vendor\/magento\/module-gift-wrapping\/Model\/Plugin\/TotalsConverter.php',
        'origin': {
          'name': 'process',
          'className': 'Magento\\Quote\\Model\\Cart\\TotalsConverter',
          'line': 34,
          'file': '\/vendor\/magento\/module-quote\/Model\/Cart\/TotalsConverter.php'
        }
      }]
    }],
    'Magento_GoogleOptimizer': [{
      'after': [{
        'active': 1,
        'name': 'afterPrepareMeta',
        'className': 'Magento\\GoogleOptimizer\\Model\\Plugin\\Cms\\Page\\DataProvider',
        'line': 32,
        'file': '\/vendor\/magento\/module-google-optimizer\/Model\/Plugin\/Cms\/Page\/DataProvider.php',
        'origin': {
          'name': 'prepareMeta',
          'className': 'Magento\\Cms\\Model\\Page\\DataProvider',
          'line': 74,
          'file': '\/vendor\/magento\/module-cms\/Model\/Page\/DataProvider.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterPrepareMeta',
        'className': 'Magento\\GoogleOptimizer\\Model\\Plugin\\Catalog\\Category\\DataProvider',
        'line': 42,
        'file': '\/vendor\/magento\/module-google-optimizer\/Model\/Plugin\/Catalog\/Category\/DataProvider.php',
        'origin': {
          'name': 'prepareMeta',
          'className': 'Magento\\Catalog\\Model\\Category\\DataProvider',
          'line': 273,
          'file': '\/vendor\/magento\/module-catalog\/Model\/Category\/DataProvider.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterGetMeta',
        'className': 'Magento\\GoogleOptimizer\\Model\\Plugin\\Catalog\\Product\\Category\\DataProvider',
        'line': 34,
        'file': '\/vendor\/magento\/module-google-optimizer\/Model\/Plugin\/Catalog\/Product\/Category\/DataProvider.php',
        'origin': {
          'name': 'getMeta',
          'className': 'Magento\\Catalog\\Ui\\DataProvider\\Product\\Form\\NewCategoryDataProvider',
          'line': 76,
          'file': '\/vendor\/magento\/module-catalog\/Ui\/DataProvider\/Product\/Form\/NewCategoryDataProvider.php'
        }
      }]
    }],
    'Magento_GoogleShoppingAds': [{
      'before': [{
        'active': 1,
        'name': 'beforeExecute',
        'className': '\\Magento\\GoogleShoppingAds\\Plugin\\Catalog\\Model\\Indexer\\Product\\Eav\\BindRemoveIndexer',
        'line': 45,
        'file': '\/vendor\/magento\/google-shopping-ads\/Plugin\/Catalog\/Model\/Indexer\/Product\/Eav\/BindRemoveIndexer.php',
        'origin': {
          'name': 'execute',
          'className': '\\Magento\\Catalog\\Model\\Indexer\\Product\\Eav',
          'line': 53,
          'file': '\/vendor\/magento\/module-catalog\/Model\/Indexer\/Product\/Eav.php'
        }
      }, {
        'active': 1,
        'name': 'beforeExecuteList',
        'className': '\\Magento\\GoogleShoppingAds\\Plugin\\Catalog\\Model\\Indexer\\Product\\Eav\\BindRemoveIndexer',
        'line': 61,
        'file': '\/vendor\/magento\/google-shopping-ads\/Plugin\/Catalog\/Model\/Indexer\/Product\/Eav\/BindRemoveIndexer.php',
        'origin': {
          'name': 'executeList',
          'className': '\\Magento\\Catalog\\Model\\Indexer\\Product\\Eav',
          'line': 81,
          'file': '\/vendor\/magento\/module-catalog\/Model\/Indexer\/Product\/Eav.php'
        }
      }, {
        'active': 1,
        'name': 'beforeExecuteRow',
        'className': '\\Magento\\GoogleShoppingAds\\Plugin\\Catalog\\Model\\Indexer\\Product\\Eav\\BindRemoveIndexer',
        'line': 77,
        'file': '\/vendor\/magento\/google-shopping-ads\/Plugin\/Catalog\/Model\/Indexer\/Product\/Eav\/BindRemoveIndexer.php',
        'origin': {
          'name': 'executeRow',
          'className': '\\Magento\\Catalog\\Model\\Indexer\\Product\\Eav',
          'line': 92,
          'file': '\/vendor\/magento\/module-catalog\/Model\/Indexer\/Product\/Eav.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterExecute',
        'className': '\\Magento\\GoogleShoppingAds\\Plugin\\Catalog\\Controller\\Adminhtml\\Product\\Action\\Attribute\\Save\\BindAttributeIndexer',
        'line': 62,
        'file': '\/vendor\/magento\/google-shopping-ads\/Plugin\/Catalog\/Controller\/Adminhtml\/Product\/Action\/Attribute\/Save\/BindAttributeIndexer.php',
        'origin': {
          'name': 'execute',
          'className': '\\Magento\\Catalog\\Controller\\Adminhtml\\Product\\Action\\Attribute\\Save',
          'line': 84,
          'file': '\/vendor\/magento\/module-catalog\/Controller\/Adminhtml\/Product\/Action\/Attribute\/Save.php'
        }
      }]
    }, {
      'around': [{
        'active': 1,
        'name': 'aroundExecute',
        'className': '\\Magento\\GoogleShoppingAds\\Plugin\\Catalog\\Controller\\Adminhtml\\Product\\MassDelete\\BindRemoveIndexer',
        'line': 59,
        'file': '\/vendor\/magento\/google-shopping-ads\/Plugin\/Catalog\/Controller\/Adminhtml\/Product\/MassDelete\/BindRemoveIndexer.php',
        'origin': {
          'name': 'execute',
          'className': '\\Magento\\Catalog\\Controller\\Adminhtml\\Product\\MassDelete',
          'line': 59,
          'file': '\/vendor\/magento\/module-catalog\/Controller\/Adminhtml\/Product\/MassDelete.php'
        }
      }]
    }, {
      'around': [{
        'active': 1,
        'name': 'aroundExecute',
        'className': '\\Magento\\GoogleShoppingAds\\Plugin\\Catalog\\Controller\\Adminhtml\\Product\\MassStatus\\BindIndexers',
        'line': 66,
        'file': '\/vendor\/magento\/google-shopping-ads\/Plugin\/Catalog\/Controller\/Adminhtml\/Product\/MassStatus\/BindIndexers.php',
        'origin': {
          'name': 'execute',
          'className': '\\Magento\\Catalog\\Controller\\Adminhtml\\Product\\MassStatus',
          'line': 83,
          'file': '\/vendor\/magento\/module-catalog\/Controller\/Adminhtml\/Product\/MassStatus.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeExecute',
        'className': '\\Magento\\GoogleShoppingAds\\Plugin\\Catalog\\Model\\Indexer\\Product\\Price\\BindPriceIndexer',
        'line': 45,
        'file': '\/vendor\/magento\/google-shopping-ads\/Plugin\/Catalog\/Model\/Indexer\/Product\/Price\/BindPriceIndexer.php',
        'origin': {
          'name': 'execute',
          'className': '\\Magento\\Catalog\\Model\\Indexer\\Product\\Price',
          'line': 53,
          'file': '\/vendor\/magento\/module-catalog\/Model\/Indexer\/Product\/Price.php'
        }
      }, {
        'active': 1,
        'name': 'beforeExecuteList',
        'className': '\\Magento\\GoogleShoppingAds\\Plugin\\Catalog\\Model\\Indexer\\Product\\Price\\BindPriceIndexer',
        'line': 61,
        'file': '\/vendor\/magento\/google-shopping-ads\/Plugin\/Catalog\/Model\/Indexer\/Product\/Price\/BindPriceIndexer.php',
        'origin': {
          'name': 'executeList',
          'className': '\\Magento\\Catalog\\Model\\Indexer\\Product\\Price',
          'line': 81,
          'file': '\/vendor\/magento\/module-catalog\/Model\/Indexer\/Product\/Price.php'
        }
      }, {
        'active': 1,
        'name': 'beforeExecuteRow',
        'className': '\\Magento\\GoogleShoppingAds\\Plugin\\Catalog\\Model\\Indexer\\Product\\Price\\BindPriceIndexer',
        'line': 77,
        'file': '\/vendor\/magento\/google-shopping-ads\/Plugin\/Catalog\/Model\/Indexer\/Product\/Price\/BindPriceIndexer.php',
        'origin': {
          'name': 'executeRow',
          'className': '\\Magento\\Catalog\\Model\\Indexer\\Product\\Price',
          'line': 92,
          'file': '\/vendor\/magento\/module-catalog\/Model\/Indexer\/Product\/Price.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeExecute',
        'className': '\\Magento\\GoogleShoppingAds\\Plugin\\CatalogInventory\\Model\\Indexer\\Stock\\BindInventoryIndexer',
        'line': 46,
        'file': '\/vendor\/magento\/google-shopping-ads\/Plugin\/CatalogInventory\/Model\/Indexer\/Stock\/BindInventoryIndexer.php',
        'origin': {
          'name': 'execute',
          'className': '\\Magento\\CatalogInventory\\Model\\Indexer\\Stock',
          'line': 54,
          'file': '\/vendor\/magento\/module-catalog-inventory\/Model\/Indexer\/Stock.php'
        }
      }, {
        'active': 1,
        'name': 'beforeExecuteList',
        'className': '\\Magento\\GoogleShoppingAds\\Plugin\\CatalogInventory\\Model\\Indexer\\Stock\\BindInventoryIndexer',
        'line': 63,
        'file': '\/vendor\/magento\/google-shopping-ads\/Plugin\/CatalogInventory\/Model\/Indexer\/Stock\/BindInventoryIndexer.php',
        'origin': {
          'name': 'executeList',
          'className': '\\Magento\\CatalogInventory\\Model\\Indexer\\Stock',
          'line': 83,
          'file': '\/vendor\/magento\/module-catalog-inventory\/Model\/Indexer\/Stock.php'
        }
      }, {
        'active': 1,
        'name': 'beforeExecuteRow',
        'className': '\\Magento\\GoogleShoppingAds\\Plugin\\CatalogInventory\\Model\\Indexer\\Stock\\BindInventoryIndexer',
        'line': 80,
        'file': '\/vendor\/magento\/google-shopping-ads\/Plugin\/CatalogInventory\/Model\/Indexer\/Stock\/BindInventoryIndexer.php',
        'origin': {
          'name': 'executeRow',
          'className': '\\Magento\\CatalogInventory\\Model\\Indexer\\Stock',
          'line': 95,
          'file': '\/vendor\/magento\/module-catalog-inventory\/Model\/Indexer\/Stock.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterExecute',
        'className': '\\Magento\\GoogleShoppingAds\\Plugin\\AddProductToCart',
        'line': 63,
        'file': '\/vendor\/magento\/google-shopping-ads\/Plugin\/AddProductToCart.php',
        'origin': {
          'name': 'execute',
          'className': 'Magento\\Checkout\\Controller\\Cart\\Add',
          'line': 83,
          'file': '\/vendor\/magento\/module-checkout\/Controller\/Cart\/Add.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterExecute',
        'className': '\\Magento\\GoogleShoppingAds\\Plugin\\DeleteProductFromShoppingCart',
        'line': 54,
        'file': '\/vendor\/magento\/google-shopping-ads\/Plugin\/DeleteProductFromShoppingCart.php',
        'origin': {
          'name': 'execute',
          'className': 'Magento\\Checkout\\Controller\\Cart\\Delete',
          'line': 22,
          'file': '\/vendor\/magento\/module-checkout\/Controller\/Cart\/Delete.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterExecute',
        'className': '\\Magento\\GoogleShoppingAds\\Plugin\\DeleteProductFromSidebar',
        'line': 54,
        'file': '\/vendor\/magento\/google-shopping-ads\/Plugin\/DeleteProductFromSidebar.php',
        'origin': {
          'name': 'execute',
          'className': 'Magento\\Checkout\\Controller\\Sidebar\\RemoveItem',
          'line': 61,
          'file': '\/vendor\/magento\/module-checkout\/Controller\/Sidebar\/RemoveItem.php'
        }
      }]
    }, {
      'around': [{
        'active': 1,
        'name': 'aroundExecute',
        'className': '\\Magento\\GoogleShoppingAds\\Plugin\\UpdateScopeOfItemsQty',
        'line': 45,
        'file': '\/vendor\/magento\/google-shopping-ads\/Plugin\/UpdateScopeOfItemsQty.php',
        'origin': {
          'name': 'execute',
          'className': 'Magento\\Checkout\\Controller\\Cart\\UpdatePost',
          'line': 100,
          'file': '\/vendor\/magento\/module-checkout\/Controller\/Cart\/UpdatePost.php'
        }
      }]
    }, {
      'around': [{
        'active': 1,
        'name': 'aroundExecute',
        'className': '\\Magento\\GoogleShoppingAds\\Plugin\\UpdateOneItemQty',
        'line': 45,
        'file': '\/vendor\/magento\/google-shopping-ads\/Plugin\/UpdateOneItemQty.php',
        'origin': {
          'name': 'execute',
          'className': 'Magento\\Checkout\\Controller\\Sidebar\\UpdateItemQty',
          'line': 55,
          'file': '\/vendor\/magento\/module-checkout\/Controller\/Sidebar\/UpdateItemQty.php'
        }
      }]
    }],
    'Magento_PageCache': [{
      'after': [{
        'active': 1,
        'name': 'afterGetValue',
        'className': 'Magento\\PageCache\\Model\\App\\CacheIdentifierPlugin',
        'line': 40,
        'file': '\/vendor\/magento\/module-page-cache\/Model\/App\/CacheIdentifierPlugin.php',
        'origin': {
          'name': 'getValue',
          'className': 'Magento\\Framework\\App\\PageCache\\Identifier',
          'line': 51,
          'file': '\/vendor\/magento\/framework\/App\/PageCache\/Identifier.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeSave',
        'className': 'Magento\\PageCache\\Model\\App\\PageCachePlugin',
        'line': 28,
        'file': '\/vendor\/magento\/module-page-cache\/Model\/App\/PageCachePlugin.php',
        'origin': {
          'name': 'save',
          'className': 'Magento\\Framework\\App\\PageCache\\Cache',
          'line': 71,
          'file': '\/vendor\/magento\/framework\/App\/PageCache\/Cache.php'
        }
      }],
      'after': [{
        'active': 1,
        'name': 'afterLoad',
        'className': 'Magento\\PageCache\\Model\\App\\PageCachePlugin',
        'line': 50,
        'file': '\/vendor\/magento\/module-page-cache\/Model\/App\/PageCachePlugin.php',
        'origin': {
          'name': 'load',
          'className': 'Magento\\Framework\\App\\PageCache\\Cache',
          'line': 57,
          'file': '\/vendor\/magento\/framework\/App\/PageCache\/Cache.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeDispatch',
        'className': 'Magento\\PageCache\\Plugin\\RegisterFormKeyFromCookie',
        'line': 76,
        'file': '\/vendor\/magento\/module-page-cache\/Plugin\/RegisterFormKeyFromCookie.php',
        'origin': {
          'name': 'dispatch',
          'className': 'Magento\\Framework\\App\\FrontControllerInterface',
          'line': 24,
          'file': '\/vendor\/magento\/framework\/App\/FrontControllerInterface.php'
        }
      }]
    }, {
      'around': [{
        'active': 1,
        'name': 'aroundDispatch',
        'className': 'Magento\\PageCache\\Model\\App\\FrontController\\BuiltinPlugin',
        'line': 62,
        'file': '\/vendor\/magento\/module-page-cache\/Model\/App\/FrontController\/BuiltinPlugin.php',
        'origin': {
          'name': 'dispatch',
          'className': 'Magento\\Framework\\App\\FrontControllerInterface',
          'line': 24,
          'file': '\/vendor\/magento\/framework\/App\/FrontControllerInterface.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterRenderResult',
        'className': 'Magento\\PageCache\\Model\\Controller\\Result\\BuiltinPlugin',
        'line': 68,
        'file': '\/vendor\/magento\/module-page-cache\/Model\/Controller\/Result\/BuiltinPlugin.php',
        'origin': {
          'name': 'renderResult',
          'className': 'Magento\\Framework\\Controller\\ResultInterface',
          'line': 46,
          'file': '\/vendor\/magento\/framework\/Controller\/ResultInterface.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterGenerateXml',
        'className': 'Magento\\PageCache\\Model\\Layout\\LayoutPlugin',
        'line': 45,
        'file': '\/vendor\/magento\/module-page-cache\/Model\/Layout\/LayoutPlugin.php',
        'origin': {
          'name': 'generateXml',
          'className': 'Magento\\Framework\\View\\Layout',
          'line': 301,
          'file': '\/vendor\/magento\/framework\/View\/Layout.php'
        }
      }, {
        'active': 1,
        'name': 'afterGetOutput',
        'className': 'Magento\\PageCache\\Model\\Layout\\LayoutPlugin',
        'line': 60,
        'file': '\/vendor\/magento\/module-page-cache\/Model\/Layout\/LayoutPlugin.php',
        'origin': {
          'name': 'getOutput',
          'className': 'Magento\\Framework\\View\\Layout',
          'line': 949,
          'file': '\/vendor\/magento\/framework\/View\/Layout.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeValidateUpdate',
        'className': 'Magento\\PageCache\\Model\\Layout\\MergePlugin',
        'line': 42,
        'file': '\/vendor\/magento\/module-page-cache\/Model\/Layout\/MergePlugin.php',
        'origin': {
          'name': 'validateUpdate',
          'className': 'Magento\\Framework\\View\\Model\\Layout\\Merge',
          'line': 621,
          'file': '\/vendor\/magento\/framework\/View\/Model\/Layout\/Merge.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeSendResponse',
        'className': 'Magento\\PageCache\\Model\\App\\Response\\HttpPlugin',
        'line': 20,
        'file': '\/vendor\/magento\/module-page-cache\/Model\/App\/Response\/HttpPlugin.php',
        'origin': {
          'name': 'sendResponse',
          'className': 'Magento\\Framework\\App\\Response\\Http',
          'line': 37,
          'file': '\/vendor\/magento\/framework\/App\/Response\/Http.php'
        }
      }]
    }],
    'Magento_GroupedProduct': [{
      'after': [{
        'active': 1,
        'name': 'afterGetOptionArray',
        'className': 'Magento\\GroupedProduct\\Model\\Product\\Type\\Plugin',
        'line': 38,
        'file': '\/vendor\/magento\/module-grouped-product\/Model\/Product\/Type\/Plugin.php',
        'origin': {
          'name': 'getOptionArray',
          'className': 'Magento\\Catalog\\Model\\Product\\Type',
          'line': 179,
          'file': '\/vendor\/magento\/module-catalog\/Model\/Product\/Type.php'
        }
      }]
    }, {
      'around': [{
        'active': 1,
        'name': 'aroundIsProductConfigured',
        'className': 'Magento\\GroupedProduct\\Model\\Product\\Cart\\Configuration\\Plugin\\Grouped',
        'line': 23,
        'file': '\/vendor\/magento\/module-grouped-product\/Model\/Product\/Cart\/Configuration\/Plugin\/Grouped.php',
        'origin': {
          'name': 'isProductConfigured',
          'className': 'Magento\\Catalog\\Model\\Product\\CartConfiguration',
          'line': 21,
          'file': '\/vendor\/magento\/module-catalog\/Model\/Product\/CartConfiguration.php'
        }
      }]
    }, {
      'around': [{
        'active': 1,
        'name': 'aroundGetOptions',
        'className': 'Magento\\GroupedProduct\\Helper\\Product\\Configuration\\Plugin\\Grouped',
        'line': 20,
        'file': '\/vendor\/magento\/module-grouped-product\/Helper\/Product\/Configuration\/Plugin\/Grouped.php',
        'origin': {
          'name': 'getOptions',
          'className': 'Magento\\Catalog\\Helper\\Product\\Configuration',
          'line': 139,
          'file': '\/vendor\/magento\/module-catalog\/Helper\/Product\/Configuration.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeInitializeLinks',
        'className': 'Magento\\GroupedProduct\\Model\\Product\\Initialization\\Helper\\ProductLinks\\Plugin\\Grouped',
        'line': 72,
        'file': '\/vendor\/magento\/module-grouped-product\/Model\/Product\/Initialization\/Helper\/ProductLinks\/Plugin\/Grouped.php',
        'origin': {
          'name': 'initializeLinks',
          'className': 'Magento\\Catalog\\Model\\Product\\Initialization\\Helper\\ProductLinks',
          'line': 18,
          'file': '\/vendor\/magento\/module-catalog\/Model\/Product\/Initialization\/Helper\/ProductLinks.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterSaveProductLinks',
        'className': 'Magento\\GroupedProduct\\Model\\ResourceModel\\Product\\Link\\RelationPersister',
        'line': 49,
        'file': '\/vendor\/magento\/module-grouped-product\/Model\/ResourceModel\/Product\/Link\/RelationPersister.php',
        'origin': {
          'name': 'saveProductLinks',
          'className': 'Magento\\Catalog\\Model\\ResourceModel\\Product\\Link',
          'line': 135,
          'file': '\/vendor\/magento\/module-catalog\/Model\/ResourceModel\/Product\/Link.php'
        }
      }],
      'around': [{
        'active': 1,
        'name': 'aroundDeleteProductLink',
        'className': 'Magento\\GroupedProduct\\Model\\ResourceModel\\Product\\Link\\RelationPersister',
        'line': 70,
        'file': '\/vendor\/magento\/module-grouped-product\/Model\/ResourceModel\/Product\/Link\/RelationPersister.php',
        'origin': {
          'name': 'deleteProductLink',
          'className': 'Magento\\Catalog\\Model\\ResourceModel\\Product\\Link',
          'line': 64,
          'file': '\/vendor\/magento\/module-catalog\/Model\/ResourceModel\/Product\/Link.php'
        }
      }]
    }, {
      'around': [{
        'active': 1,
        'name': 'aroundGetItemQty',
        'className': 'Magento\\GroupedProduct\\Block\\Adminhtml\\Order\\Create\\Sidebar',
        'line': 20,
        'file': '\/vendor\/magento\/module-grouped-product\/Block\/Adminhtml\/Order\/Create\/Sidebar.php',
        'origin': {
          'name': 'getItemQty',
          'className': 'Magento\\Sales\\Block\\Adminhtml\\Order\\Create\\Sidebar\\AbstractSidebar',
          'line': 214,
          'file': '\/vendor\/magento\/module-sales\/Block\/Adminhtml\/Order\/Create\/Sidebar\/AbstractSidebar.php'
        }
      }, {
        'active': 1,
        'name': 'aroundIsConfigurationRequired',
        'className': 'Magento\\GroupedProduct\\Block\\Adminhtml\\Order\\Create\\Sidebar',
        'line': 41,
        'file': '\/vendor\/magento\/module-grouped-product\/Block\/Adminhtml\/Order\/Create\/Sidebar.php',
        'origin': {
          'name': 'isConfigurationRequired',
          'className': 'Magento\\Sales\\Block\\Adminhtml\\Order\\Create\\Sidebar\\AbstractSidebar',
          'line': 226,
          'file': '\/vendor\/magento\/module-sales\/Block\/Adminhtml\/Order\/Create\/Sidebar\/AbstractSidebar.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterInit',
        'className': 'Magento\\GroupedProduct\\Model\\Sales\\AdminOrder\\Product\\Quote\\Plugin\\Initializer',
        'line': 29,
        'file': '\/vendor\/magento\/module-grouped-product\/Model\/Sales\/AdminOrder\/Product\/Quote\/Plugin\/Initializer.php',
        'origin': {
          'name': 'init',
          'className': 'Magento\\Sales\\Model\\AdminOrder\\Product\\Quote\\Initializer',
          'line': 37,
          'file': '\/vendor\/magento\/module-sales\/Model\/AdminOrder\/Product\/Quote\/Initializer.php'
        }
      }]
    }],
    'Magento_GroupedCatalogInventory': [{
      'after': [{
        'active': 1,
        'name': 'afterPrepareForCartAdvanced',
        'className': 'Magento\\GroupedCatalogInventory\\Plugin\\OutOfStockFilter',
        'line': 44,
        'file': '\/vendor\/magento\/module-grouped-catalog-inventory\/Plugin\/OutOfStockFilter.php',
        'origin': {
          'name': 'prepareForCartAdvanced',
          'className': 'Magento\\GroupedProduct\\Model\\Product\\Type\\Grouped',
          'line': 450,
          'file': '\/vendor\/magento\/module-grouped-product\/Model\/Product\/Type\/Grouped.php'
        }
      }]
    }],
    'Magento_GroupedProductStaging': [{
      'before': [{
        'active': 1,
        'name': 'beforeLoadEntity',
        'className': 'Magento\\GroupedProductStaging\\Model\\Product\\Operation\\Update\\FlushAssociatedProductCache',
        'line': 19,
        'file': '\/vendor\/magento\/module-grouped-product-staging\/Model\/Product\/Operation\/Update\/FlushAssociatedProductCache.php',
        'origin': {
          'name': 'loadEntity',
          'className': 'Magento\\CatalogStaging\\Model\\Product\\Operation\\Update\\TemporaryUpdateProcessor',
          'line': 135,
          'file': '\/vendor\/magento\/module-catalog-staging\/Model\/Product\/Operation\/Update\/TemporaryUpdateProcessor.php'
        }
      }, {
        'active': 1,
        'name': 'beforeBuildEntity',
        'className': 'Magento\\GroupedProductStaging\\Model\\Product\\Operation\\Update\\FlushAssociatedProductCache',
        'line': 32,
        'file': '\/vendor\/magento\/module-grouped-product-staging\/Model\/Product\/Operation\/Update\/FlushAssociatedProductCache.php',
        'origin': {
          'name': 'buildEntity',
          'className': 'Magento\\CatalogStaging\\Model\\Product\\Operation\\Update\\TemporaryUpdateProcessor',
          'line': 148,
          'file': '\/vendor\/magento\/module-catalog-staging\/Model\/Product\/Operation\/Update\/TemporaryUpdateProcessor.php'
        }
      }]
    }],
    'Magento_Paypal': [{
      'after': [{
        'active': 0,
        'name': 'afterIsApplicable',
        'className': 'Magento\\Paypal\\Model\\Method\\Checks\\SpecificationPlugin',
        'line': 43,
        'file': '\/vendor\/magento\/module-paypal\/Model\/Method\/Checks\/SpecificationPlugin.php',
        'origin': {
          'name': 'isApplicable',
          'className': 'Magento\\Payment\\Model\\Checks\\Composite',
          'line': 40,
          'file': '\/vendor\/magento\/module-payment\/Model\/Checks\/Composite.php'
        }
      }]
    }, {
      'after': [{
        'active': 0,
        'name': 'afterCanInvoice',
        'className': 'Magento\\Paypal\\Plugin\\OrderCanInvoice',
        'line': 41,
        'file': '\/vendor\/magento\/module-paypal\/Plugin\/OrderCanInvoice.php',
        'origin': {
          'name': 'canInvoice',
          'className': 'Magento\\Sales\\Model\\Order',
          'line': 623,
          'file': '\/vendor\/magento\/module-sales\/Model\/Order.php'
        }
      }]
    }, {
      'after': [{
        'active': 0,
        'name': 'afterValidate',
        'className': 'Magento\\Paypal\\Plugin\\ValidatorCanInvoice',
        'line': 46,
        'file': '\/vendor\/magento\/module-paypal\/Plugin\/ValidatorCanInvoice.php',
        'origin': {
          'name': 'validate',
          'className': 'Magento\\Sales\\Model\\Order\\Validation\\CanInvoice',
          'line': 23,
          'file': '\/vendor\/magento\/module-sales\/Model\/Order\/Validation\/CanInvoice.php'
        }
      }]
    }, {
      'around': [{
        'active': 0,
        'name': 'aroundGetElementByPathParts',
        'className': 'Magento\\Paypal\\Model\\Config\\StructurePlugin',
        'line': 101,
        'file': '\/vendor\/magento\/module-paypal\/Model\/Config\/StructurePlugin.php',
        'origin': {
          'name': 'getElementByPathParts',
          'className': 'Magento\\Config\\Model\\Config\\Structure',
          'line': 227,
          'file': '\/vendor\/magento\/module-config\/Model\/Config\/Structure.php'
        }
      }]
    }, {
      'after': [{
        'active': 0,
        'name': 'afterGetConfigPath',
        'className': 'Magento\\Paypal\\Model\\Config\\Structure\\Element\\FieldPlugin',
        'line': 23,
        'file': '\/vendor\/magento\/module-paypal\/Model\/Config\/Structure\/Element\/FieldPlugin.php',
        'origin': {
          'name': 'getConfigPath',
          'className': 'Magento\\Config\\Model\\Config\\Structure\\Element\\Field',
          'line': 257,
          'file': '\/vendor\/magento\/module-config\/Model\/Config\/Structure\/Element\/Field.php'
        }
      }]
    }, {
      'before': [{
        'active': 0,
        'name': 'beforeGetUrl',
        'className': 'Magento\\Paypal\\Block\\Adminhtml\\Store\\SwitcherPlugin',
        'line': 24,
        'file': '\/vendor\/magento\/module-paypal\/Block\/Adminhtml\/Store\/SwitcherPlugin.php',
        'origin': {
          'name': 'getUrl',
          'className': 'Magento\\Backend\\Block\\Store\\Switcher',
          'line': 773,
          'file': '\/vendor\/magento\/module-backend\/Block\/Store\/Switcher.php'
        }
      }]
    }, {
      'before': [{
        'active': 0,
        'name': 'beforeSave',
        'className': 'Magento\\Paypal\\Model\\Express\\QuotePlugin',
        'line': 43,
        'file': '\/vendor\/magento\/module-paypal\/Model\/Express\/QuotePlugin.php',
        'origin': {
          'name': 'save',
          'className': 'Magento\\Quote\\Model\\QuoteRepository\\SaveHandler',
          'line': 87,
          'file': '\/vendor\/magento\/module-quote\/Model\/QuoteRepository\/SaveHandler.php'
        }
      }]
    }],
    'Magento_InventoryAdvancedCheckout': [{
      'around': [{
        'active': 1,
        'name': 'aroundExecute',
        'className': 'Magento\\InventoryAdvancedCheckout\\Plugin\\Model\\IsProductInStock\\ProductInStockPlugin',
        'line': 81,
        'file': '\/vendor\/magento\/module-inventory-advanced-checkout\/Plugin\/Model\/IsProductInStock\/ProductInStockPlugin.php',
        'origin': {
          'name': 'execute',
          'className': 'Magento\\AdvancedCheckout\\Model\\IsProductInStockInterface',
          'line': 23,
          'file': '\/vendor\/magento\/module-advanced-checkout\/Model\/IsProductInStockInterface.php'
        }
      }]
    }],
    'Magento_InventoryBundleProduct': [{
      'around': [{
        'active': 1,
        'name': 'aroundExecute',
        'className': 'Magento\\InventoryBundleProduct\\Plugin\\InventoryConfigurationApi\\IsSourceItemManagementAllowedForProductType\\DisableBundleTypePlugin',
        'line': 25,
        'file': '\/vendor\/magento\/module-inventory-bundle-product\/Plugin\/InventoryConfigurationApi\/IsSourceItemManagementAllowedForProductType\/DisableBundleTypePlugin.php',
        'origin': {
          'name': 'execute',
          'className': 'Magento\\InventoryConfigurationApi\\Model\\IsSourceItemManagementAllowedForProductTypeInterface',
          'line': 21,
          'file': '\/vendor\/magento\/module-inventory-configuration-api\/Model\/IsSourceItemManagementAllowedForProductTypeInterface.php'
        }
      }]
    }],
    'Magento_InventoryCatalog': [{
      'before': [{
        'active': 1,
        'name': 'beforeDeleteById',
        'className': 'Magento\\InventoryCatalog\\Plugin\\InventoryApi\\StockRepository\\PreventDeleting\\DefaultStockPlugin',
        'line': 42,
        'file': '\/vendor\/magento\/module-inventory-catalog\/Plugin\/InventoryApi\/StockRepository\/PreventDeleting\/DefaultStockPlugin.php',
        'origin': {
          'name': 'deleteById',
          'className': 'Magento\\InventoryApi\\Api\\StockRepositoryInterface',
          'line': 67,
          'file': '\/vendor\/magento\/module-inventory-api\/Api\/StockRepositoryInterface.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterExecute',
        'className': 'Magento\\InventoryCatalog\\Plugin\\InventoryApi\\SetDataToLegacyCatalogInventoryAtSourceItemsSavePlugin',
        'line': 67,
        'file': '\/vendor\/magento\/module-inventory-catalog\/Plugin\/InventoryApi\/SetDataToLegacyCatalogInventoryAtSourceItemsSavePlugin.php',
        'origin': {
          'name': 'execute',
          'className': 'Magento\\InventoryApi\\Api\\SourceItemsSaveInterface',
          'line': 29,
          'file': '\/vendor\/magento\/module-inventory-api\/Api\/SourceItemsSaveInterface.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterExecuteList',
        'className': 'Magento\\InventoryCatalog\\Plugin\\InventoryIndexer\\Indexer\\SourceItem\\PriceIndexUpdater',
        'line': 47,
        'file': '\/vendor\/magento\/module-inventory-catalog\/Plugin\/InventoryIndexer\/Indexer\/SourceItem\/PriceIndexUpdater.php',
        'origin': {
          'name': 'executeList',
          'className': 'Magento\\InventoryIndexer\\Indexer\\SourceItem\\SourceItemIndexer',
          'line': 111,
          'file': '\/vendor\/magento\/module-inventory-indexer\/Indexer\/SourceItem\/SourceItemIndexer.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterExecuteList',
        'className': 'Magento\\InventoryCatalog\\Plugin\\InventoryIndexer\\Indexer\\Stock\\PriceIndexUpdater',
        'line': 39,
        'file': '\/vendor\/magento\/module-inventory-catalog\/Plugin\/InventoryIndexer\/Indexer\/Stock\/PriceIndexUpdater.php',
        'origin': {
          'name': 'executeList',
          'className': 'Magento\\InventoryIndexer\\Indexer\\Stock\\StockIndexer',
          'line': 113,
          'file': '\/vendor\/magento\/module-inventory-indexer\/Indexer\/Stock\/StockIndexer.php'
        }
      }]
    }, {
      'around': [{
        'active': 1,
        'name': 'aroundModifyPrice',
        'className': 'Magento\\InventoryCatalog\\Plugin\\CatalogInventory\\Model\\Indexer\\ModifySelectInProductPriceIndexFilter',
        'line': 79,
        'file': '\/vendor\/magento\/module-inventory-catalog\/Plugin\/CatalogInventory\/Model\/Indexer\/ModifySelectInProductPriceIndexFilter.php',
        'origin': {
          'name': 'modifyPrice',
          'className': 'Magento\\CatalogInventory\\Model\\Indexer\\ProductPriceIndexFilter',
          'line': 87,
          'file': '\/vendor\/magento\/module-catalog-inventory\/Model\/Indexer\/ProductPriceIndexFilter.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterExecute',
        'className': 'Magento\\InventoryCatalog\\Plugin\\InventoryApi\\SetToZeroLegacyCatalogInventoryAtSourceItemsDeletePlugin',
        'line': 87,
        'file': '\/vendor\/magento\/module-inventory-catalog\/Plugin\/InventoryApi\/SetToZeroLegacyCatalogInventoryAtSourceItemsDeletePlugin.php',
        'origin': {
          'name': 'execute',
          'className': 'Magento\\InventoryApi\\Api\\SourceItemsDeleteInterface',
          'line': 28,
          'file': '\/vendor\/magento\/module-inventory-api\/Api\/SourceItemsDeleteInterface.php'
        }
      }]
    }, {
      'around': [{
        'active': 1,
        'name': 'aroundCorrectItemsQty',
        'className': 'Magento\\InventoryCatalog\\Plugin\\CatalogInventory\\UpdateSourceItemAtLegacyQtyCounterPlugin',
        'line': 89,
        'file': '\/vendor\/magento\/module-inventory-catalog\/Plugin\/CatalogInventory\/UpdateSourceItemAtLegacyQtyCounterPlugin.php',
        'origin': {
          'name': 'correctItemsQty',
          'className': 'Magento\\CatalogInventory\\Model\\ResourceModel\\QtyCounterInterface',
          'line': 21,
          'file': '\/vendor\/magento\/module-catalog-inventory\/Model\/ResourceModel\/QtyCounterInterface.php'
        }
      }]
    }, {
      'around': [{
        'active': 1,
        'name': 'aroundSave',
        'className': 'Magento\\InventoryCatalog\\Plugin\\CatalogInventory\\UpdateSourceItemAtLegacyStockItemSavePlugin',
        'line': 89,
        'file': '\/vendor\/magento\/module-inventory-catalog\/Plugin\/CatalogInventory\/UpdateSourceItemAtLegacyStockItemSavePlugin.php',
        'origin': {
          'name': 'save',
          'className': 'Magento\\CatalogInventory\\Model\\ResourceModel\\Stock\\Item',
          'line': 392,
          'file': '\/vendor\/magento\/module-catalog-inventory\/Model\/ResourceModel\/Stock\/Item.php'
        }
      }]
    }, {
      'around': [{
        'active': 1,
        'name': 'aroundAddStockDataToCollection',
        'className': 'Magento\\InventoryCatalog\\Plugin\\CatalogInventory\\Model\\ResourceModel\\Stock\\Status\\AdaptAddStockDataToCollectionPlugin',
        'line': 51,
        'file': '\/vendor\/magento\/module-inventory-catalog\/Plugin\/CatalogInventory\/Model\/ResourceModel\/Stock\/Status\/AdaptAddStockDataToCollectionPlugin.php',
        'origin': {
          'name': 'addStockDataToCollection',
          'className': 'Magento\\CatalogInventory\\Model\\ResourceModel\\Stock\\Status',
          'line': 233,
          'file': '\/vendor\/magento\/module-catalog-inventory\/Model\/ResourceModel\/Stock\/Status.php'
        }
      }]
    }, {
      'around': [{
        'active': 1,
        'name': 'aroundAddInStockFilterToCollection',
        'className': 'Magento\\InventoryCatalog\\Plugin\\CatalogInventory\\Helper\\Stock\\AdaptAddInStockFilterToCollectionPlugin',
        'line': 61,
        'file': '\/vendor\/magento\/module-inventory-catalog\/Plugin\/CatalogInventory\/Helper\/Stock\/AdaptAddInStockFilterToCollectionPlugin.php',
        'origin': {
          'name': 'addInStockFilterToCollection',
          'className': 'Magento\\CatalogInventory\\Helper\\Stock',
          'line': 122,
          'file': '\/vendor\/magento\/module-catalog-inventory\/Helper\/Stock.php'
        }
      }]
    }, {
      'around': [{
        'active': 1,
        'name': 'aroundExecute',
        'className': 'Magento\\InventoryCatalog\\Plugin\\InventorySalesApi\\StockResolver\\AdaptStockResolverToAdminWebsitePlugin',
        'line': 51,
        'file': '\/vendor\/magento\/module-inventory-catalog\/Plugin\/InventorySalesApi\/StockResolver\/AdaptStockResolverToAdminWebsitePlugin.php',
        'origin': {
          'name': 'execute',
          'className': 'Magento\\InventorySalesApi\\Api\\GetStockBySalesChannelInterface',
          'line': 24,
          'file': '\/vendor\/magento\/module-inventory-sales-api\/Api\/GetStockBySalesChannelInterface.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeExecute',
        'className': 'Magento\\InventoryCatalog\\Plugin\\InventoryApi\\StockSourceLinksDelete\\PreventDeleteDefaultStockLinksPlugin',
        'line': 51,
        'file': '\/vendor\/magento\/module-inventory-catalog\/Plugin\/InventoryApi\/StockSourceLinksDelete\/PreventDeleteDefaultStockLinksPlugin.php',
        'origin': {
          'name': 'execute',
          'className': 'Magento\\InventoryApi\\Api\\StockSourceLinksDeleteInterface',
          'line': 27,
          'file': '\/vendor\/magento\/module-inventory-api\/Api\/StockSourceLinksDeleteInterface.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterGetStockStatus',
        'className': 'Magento\\InventoryCatalog\\Plugin\\CatalogInventory\\Api\\StockRegistry\\AdaptGetStockStatusPlugin',
        'line': 79,
        'file': '\/vendor\/magento\/module-inventory-catalog\/Plugin\/CatalogInventory\/Api\/StockRegistry\/AdaptGetStockStatusPlugin.php',
        'origin': {
          'name': 'getStockStatus',
          'className': 'Magento\\CatalogInventory\\Api\\StockRegistryInterface',
          'line': 45,
          'file': '\/vendor\/magento\/module-catalog-inventory\/Api\/StockRegistryInterface.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterFilter',
        'className': 'Magento\\InventoryCatalog\\Plugin\\Catalog\\Controller\\Adminhtml\\Product\\Initialization\\StockDataFilter\\AllowNegativeMinQtyPlugin',
        'line': 22,
        'file': '\/vendor\/magento\/module-inventory-catalog\/Plugin\/Catalog\/Controller\/Adminhtml\/Product\/Initialization\/StockDataFilter\/AllowNegativeMinQtyPlugin.php',
        'origin': {
          'name': 'filter',
          'className': 'Magento\\Catalog\\Controller\\Adminhtml\\Product\\Initialization\\StockDataFilter',
          'line': 50,
          'file': '\/vendor\/magento\/module-catalog\/Controller\/Adminhtml\/Product\/Initialization\/StockDataFilter.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterGetMinQty',
        'className': 'Magento\\InventoryCatalog\\Plugin\\CatalogInventory\\Api\\Data\\StockItemInterface\\AdaptMinQtyToBackordersPlugin',
        'line': 19,
        'file': '\/vendor\/magento\/module-inventory-catalog\/Plugin\/CatalogInventory\/Api\/Data\/StockItemInterface\/AdaptMinQtyToBackordersPlugin.php',
        'origin': {
          'name': 'getMinQty',
          'className': 'Magento\\CatalogInventory\\Api\\Data\\StockItemInterface',
          'line': 160,
          'file': '\/vendor\/magento\/module-catalog-inventory\/Api\/Data\/StockItemInterface.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterVerifyStock',
        'className': 'Magento\\InventoryCatalog\\Plugin\\CatalogInventory\\Model\\Spi\\StockStateProvider\\AdaptVerifyStockToNegativeMinQtyPlugin',
        'line': 22,
        'file': '\/vendor\/magento\/module-inventory-catalog\/Plugin\/CatalogInventory\/Model\/Spi\/StockStateProvider\/AdaptVerifyStockToNegativeMinQtyPlugin.php',
        'origin': {
          'name': 'verifyStock',
          'className': 'Magento\\CatalogInventory\\Model\\Spi\\StockStateProviderInterface',
          'line': 25,
          'file': '\/vendor\/magento\/module-catalog-inventory\/Model\/Spi\/StockStateProviderInterface.php'
        }
      }]
    }],
    'Magento_InventorySales': [{
      'after': [{
        'active': 1,
        'name': 'afterGetList',
        'className': 'Magento\\InventorySales\\Plugin\\InventoryApi\\StockRepository\\LoadSalesChannelsOnGetListPlugin',
        'line': 52,
        'file': '\/vendor\/magento\/module-inventory-sales\/Plugin\/InventoryApi\/StockRepository\/LoadSalesChannelsOnGetListPlugin.php',
        'origin': {
          'name': 'getList',
          'className': 'Magento\\InventoryApi\\Api\\StockRepositoryInterface',
          'line': 55,
          'file': '\/vendor\/magento\/module-inventory-api\/Api\/StockRepositoryInterface.php'
        }
      }]
    }, {
      'around': [{
        'active': 1,
        'name': 'aroundCheckQuoteItemQty',
        'className': 'Magento\\InventorySales\\Plugin\\StockState\\CheckQuoteItemQtyPlugin',
        'line': 109,
        'file': '\/vendor\/magento\/module-inventory-sales\/Plugin\/StockState\/CheckQuoteItemQtyPlugin.php',
        'origin': {
          'name': 'checkQuoteItemQty',
          'className': 'Magento\\CatalogInventory\\Api\\StockStateInterface',
          'line': 41,
          'file': '\/vendor\/magento\/module-catalog-inventory\/Api\/StockStateInterface.php'
        }
      }]
    }, {
      'around': [{
        'active': 1,
        'name': 'aroundExecute',
        'className': 'Magento\\InventorySales\\Plugin\\InventoryReservationsApi\\PreventAppendReservationOnNotManageItemsInStockPlugin',
        'line': 51,
        'file': '\/vendor\/magento\/module-inventory-sales\/Plugin\/InventoryReservationsApi\/PreventAppendReservationOnNotManageItemsInStockPlugin.php',
        'origin': {
          'name': 'execute',
          'className': 'Magento\\InventoryReservationsApi\\Model\\AppendReservationsInterface',
          'line': 34,
          'file': '\/vendor\/magento\/module-inventory-reservations-api\/Model\/AppendReservationsInterface.php'
        }
      }]
    }, {
      'around': [{
        'active': 1,
        'name': 'aroundBackItemQty',
        'className': 'Magento\\InventorySales\\Plugin\\CatalogInventory\\StockManagement\\ProcessBackItemQtyPlugin',
        'line': 109,
        'file': '\/vendor\/magento\/module-inventory-sales\/Plugin\/CatalogInventory\/StockManagement\/ProcessBackItemQtyPlugin.php',
        'origin': {
          'name': 'backItemQty',
          'className': 'Magento\\CatalogInventory\\Model\\StockManagement',
          'line': 174,
          'file': '\/vendor\/magento\/module-catalog-inventory\/Model\/StockManagement.php'
        }
      }]
    }, {
      'around': [{
        'active': 1,
        'name': 'aroundRegisterProductsSale',
        'className': 'Magento\\InventorySales\\Plugin\\CatalogInventory\\StockManagement\\ProcessRegisterProductsSalePlugin',
        'line': 89,
        'file': '\/vendor\/magento\/module-inventory-sales\/Plugin\/CatalogInventory\/StockManagement\/ProcessRegisterProductsSalePlugin.php',
        'origin': {
          'name': 'registerProductsSale',
          'className': 'Magento\\CatalogInventory\\Api\\RegisterProductSaleInterface',
          'line': 35,
          'file': '\/vendor\/magento\/module-catalog-inventory\/Api\/RegisterProductSaleInterface.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterPlace',
        'className': 'Magento\\InventorySales\\Plugin\\Sales\\OrderManagement\\AppendReservationsAfterOrderPlacementPlugin',
        'line': 119,
        'file': '\/vendor\/magento\/module-inventory-sales\/Plugin\/Sales\/OrderManagement\/AppendReservationsAfterOrderPlacementPlugin.php',
        'origin': {
          'name': 'place',
          'className': 'Magento\\Sales\\Api\\OrderManagementInterface',
          'line': 82,
          'file': '\/vendor\/magento\/module-sales\/Api\/OrderManagementInterface.php'
        }
      }]
    }, {
      'around': [{
        'active': 1,
        'name': 'aroundExecute',
        'className': 'Magento\\InventorySales\\Plugin\\SalesInventory\\ProcessReturnQtyOnCreditMemoPlugin',
        'line': 77,
        'file': '\/vendor\/magento\/module-inventory-sales\/Plugin\/SalesInventory\/ProcessReturnQtyOnCreditMemoPlugin.php',
        'origin': {
          'name': 'execute',
          'className': 'Magento\\SalesInventory\\Model\\Order\\ReturnProcessor',
          'line': 74,
          'file': '\/vendor\/magento\/module-sales-inventory\/Model\/Order\/ReturnProcessor.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterSave',
        'className': 'Magento\\InventorySales\\Plugin\\Store\\Model\\ResourceModel\\Website\\AssignWebsiteToDefaultStockPlugin',
        'line': 76,
        'file': '\/vendor\/magento\/module-inventory-sales\/Plugin\/Store\/Model\/ResourceModel\/Website\/AssignWebsiteToDefaultStockPlugin.php',
        'origin': {
          'name': 'save',
          'className': 'Magento\\Store\\Model\\ResourceModel\\Website',
          'line': 392,
          'file': '\/vendor\/magento\/module-store\/Model\/ResourceModel\/Website.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterExecute',
        'className': 'Magento\\InventoryCatalog\\Plugin\\InventoryConfigurationApi\\GetStockItemConfiguration\\LoadIsInStockPlugin',
        'line': 40,
        'file': '\/vendor\/magento\/module-inventory-catalog\/Plugin\/InventoryConfigurationApi\/GetStockItemConfiguration\/LoadIsInStockPlugin.php',
        'origin': {
          'name': 'execute',
          'className': 'Magento\\InventoryConfigurationApi\\Api\\GetStockItemConfigurationInterface',
          'line': 24,
          'file': '\/vendor\/magento\/module-inventory-configuration-api\/Api\/GetStockItemConfigurationInterface.php'
        }
      }]
    }],
    'Magento_InventoryCatalogAdminUi': [{
      'after': [{
        'active': 1,
        'name': 'afterCopy',
        'className': 'Magento\\InventoryCatalogAdminUi\\Plugin\\Catalog\\CopySourceItemsPlugin',
        'line': 61,
        'file': '\/vendor\/magento\/module-inventory-catalog-admin-ui\/Plugin\/Catalog\/CopySourceItemsPlugin.php',
        'origin': {
          'name': 'copy',
          'className': 'Magento\\Catalog\\Model\\Product\\Copier',
          'line': 58,
          'file': '\/vendor\/magento\/module-catalog\/Model\/Product\/Copier.php'
        }
      }]
    }, {
      'around': [{
        'active': 1,
        'name': 'aroundProcess',
        'className': 'Magento\\InventoryCatalogAdminUi\\Plugin\\InventoryAdminUi\\Stock\\StockSaveProcessor\\PreventProcessDefaultStockLinksPlugin',
        'line': 41,
        'file': '\/vendor\/magento\/module-inventory-catalog-admin-ui\/Plugin\/InventoryAdminUi\/Stock\/StockSaveProcessor\/PreventProcessDefaultStockLinksPlugin.php',
        'origin': {
          'name': 'process',
          'className': 'Magento\\InventoryAdminUi\\Model\\Stock\\StockSourceLinkProcessor',
          'line': 85,
          'file': '\/vendor\/magento\/module-inventory-admin-ui\/Model\/Stock\/StockSourceLinkProcessor.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterGetMeta',
        'className': 'Magento\\InventoryCatalogAdminUi\\Plugin\\InventoryAdminUi\\DataProvider\\PreventDisablingDefaultSourcePlugin',
        'line': 44,
        'file': '\/vendor\/magento\/module-inventory-catalog-admin-ui\/Plugin\/InventoryAdminUi\/DataProvider\/PreventDisablingDefaultSourcePlugin.php',
        'origin': {
          'name': 'getMeta',
          'className': 'Magento\\InventoryAdminUi\\Ui\\DataProvider\\SourceDataProvider',
          'line': 171,
          'file': '\/vendor\/magento\/module-inventory-admin-ui\/Ui\/DataProvider\/SourceDataProvider.php'
        }
      }]
    }],
    'Magento_InventoryCatalogSearch': [{
      'around': [{
        'active': 1,
        'name': 'aroundApply',
        'className': 'Magento\\InventoryCatalogSearch\\Plugin\\Search\\FilterMapper\\AdaptStockStatusFilterPlugin',
        'line': 94,
        'file': '\/vendor\/magento\/module-inventory-catalog-search\/Plugin\/Search\/FilterMapper\/AdaptStockStatusFilterPlugin.php',
        'origin': {
          'name': 'apply',
          'className': 'Magento\\CatalogSearch\\Model\\Search\\FilterMapper\\StockStatusFilter',
          'line': 88,
          'file': '\/vendor\/magento\/module-catalog-search\/Model\/Search\/FilterMapper\/StockStatusFilter.php'
        }
      }]
    }, {
      'around': [{
        'active': 1,
        'name': 'aroundExecute',
        'className': 'Magento\\InventoryCatalogSearch\\Plugin\\Model\\Adapter\\Mysql\\Aggregation\\DataProvider\\SelectBuilderForAttribute\\AdaptApplyStockConditionToSelectPlugin',
        'line': 80,
        'file': '\/vendor\/magento\/module-inventory-catalog-search\/Plugin\/Model\/Adapter\/Mysql\/Aggregation\/DataProvider\/SelectBuilderForAttribute\/AdaptApplyStockConditionToSelectPlugin.php',
        'origin': {
          'name': 'execute',
          'className': 'Magento\\CatalogSearch\\Model\\Adapter\\Mysql\\Aggregation\\DataProvider\\SelectBuilderForAttribute\\ApplyStockConditionToSelect',
          'line': 40,
          'file': '\/vendor\/magento\/module-catalog-search\/Model\/Adapter\/Mysql\/Aggregation\/DataProvider\/SelectBuilderForAttribute\/ApplyStockConditionToSelect.php'
        }
      }]
    }, {
      'around': [{
        'active': 1,
        'name': 'aroundExecute',
        'className': 'Magento\\InventoryCatalogSearch\\Plugin\\Model\\Search\\FilterMapper\\TermDropdownStrategy\\AdaptApplyStockConditionToSelectPlugin',
        'line': 71,
        'file': '\/vendor\/magento\/module-inventory-catalog-search\/Plugin\/Model\/Search\/FilterMapper\/TermDropdownStrategy\/AdaptApplyStockConditionToSelectPlugin.php',
        'origin': {
          'name': 'execute',
          'className': 'Magento\\CatalogSearch\\Model\\Search\\FilterMapper\\TermDropdownStrategy\\ApplyStockConditionToSelect',
          'line': 43,
          'file': '\/vendor\/magento\/module-catalog-search\/Model\/Search\/FilterMapper\/TermDropdownStrategy\/ApplyStockConditionToSelect.php'
        }
      }]
    }],
    'Magento_InventoryConfigurableProduct': [{
      'around': [{
        'active': 1,
        'name': 'aroundExecute',
        'className': 'Magento\\InventoryConfigurableProduct\\Plugin\\Sales\\GetSkuFromOrderItem',
        'line': 26,
        'file': '\/vendor\/magento\/module-inventory-configurable-product\/Plugin\/Sales\/GetSkuFromOrderItem.php',
        'origin': {
          'name': 'execute',
          'className': 'Magento\\InventorySalesApi\\Model\\GetSkuFromOrderItemInterface',
          'line': 19,
          'file': '\/vendor\/magento\/module-inventory-sales-api\/Model\/GetSkuFromOrderItemInterface.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterGetSelect',
        'className': 'Magento\\InventoryConfigurableProduct\\Plugin\\Model\\ResourceModel\\Attribute\\IsSalableOptionSelectBuilder',
        'line': 76,
        'file': '\/vendor\/magento\/module-inventory-configurable-product\/Plugin\/Model\/ResourceModel\/Attribute\/IsSalableOptionSelectBuilder.php',
        'origin': {
          'name': 'getSelect',
          'className': 'Magento\\ConfigurableProduct\\Model\\ResourceModel\\Attribute\\OptionSelectBuilderInterface',
          'line': 25,
          'file': '\/vendor\/magento\/module-configurable-product\/Model\/ResourceModel\/Attribute\/OptionSelectBuilderInterface.php'
        }
      }]
    }],
    'Magento_InventoryConfigurableProductAdminUi': [{
      'before': [{
        'active': 1,
        'name': 'beforeSetTemplate',
        'className': 'Magento\\InventoryConfigurableProductAdminUi\\Plugin\\Block\\BulkStepChangeTemplate',
        'line': 47,
        'file': '\/vendor\/magento\/module-inventory-configurable-product-admin-ui\/Plugin\/Block\/BulkStepChangeTemplate.php',
        'origin': {
          'name': 'setTemplate',
          'className': 'Magento\\ConfigurableProduct\\Block\\Adminhtml\\Product\\Steps\\Bulk',
          'line': 203,
          'file': '\/vendor\/magento\/module-configurable-product\/Block\/Adminhtml\/Product\/Steps\/Bulk.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeSetTemplate',
        'className': 'Magento\\InventoryConfigurableProductAdminUi\\Plugin\\Block\\SummaryStepChangeTemplate',
        'line': 47,
        'file': '\/vendor\/magento\/module-inventory-configurable-product-admin-ui\/Plugin\/Block\/SummaryStepChangeTemplate.php',
        'origin': {
          'name': 'setTemplate',
          'className': 'Magento\\ConfigurableProduct\\Block\\Adminhtml\\Product\\Steps\\Summary',
          'line': 203,
          'file': '\/vendor\/magento\/module-configurable-product\/Block\/Adminhtml\/Product\/Steps\/Summary.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterGetProductMatrix',
        'className': 'Magento\\InventoryConfigurableProductAdminUi\\Plugin\\Block\\AddQuantityPerSourceToVariationsMatrix',
        'line': 50,
        'file': '\/vendor\/magento\/module-inventory-configurable-product-admin-ui\/Plugin\/Block\/AddQuantityPerSourceToVariationsMatrix.php',
        'origin': {
          'name': 'getProductMatrix',
          'className': 'Magento\\ConfigurableProduct\\Block\\Adminhtml\\Product\\Edit\\Tab\\Variations\\Config\\Matrix',
          'line': 311,
          'file': '\/vendor\/magento\/module-configurable-product\/Block\/Adminhtml\/Product\/Edit\/Tab\/Variations\/Config\/Matrix.php'
        }
      }]
    }],
    'Magento_InventoryConfigurableProductIndexer': [{
      'after': [{
        'active': 1,
        'name': 'afterExecuteList',
        'className': 'Magento\\InventoryConfigurableProductIndexer\\Plugin\\InventoryIndexer\\SourceItemIndexerPlugin',
        'line': 40,
        'file': '\/vendor\/magento\/module-inventory-configurable-product-indexer\/Plugin\/InventoryIndexer\/SourceItemIndexerPlugin.php',
        'origin': {
          'name': 'executeList',
          'className': 'Magento\\InventoryIndexer\\Indexer\\SourceItem\\SourceItemIndexer',
          'line': 111,
          'file': '\/vendor\/magento\/module-inventory-indexer\/Indexer\/SourceItem\/SourceItemIndexer.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterExecuteList',
        'className': 'Magento\\InventoryConfigurableProductIndexer\\Plugin\\InventoryIndexer\\StockIndexerPlugin',
        'line': 39,
        'file': '\/vendor\/magento\/module-inventory-configurable-product-indexer\/Plugin\/InventoryIndexer\/StockIndexerPlugin.php',
        'origin': {
          'name': 'executeList',
          'className': 'Magento\\InventoryIndexer\\Indexer\\Stock\\StockIndexer',
          'line': 113,
          'file': '\/vendor\/magento\/module-inventory-indexer\/Indexer\/Stock\/StockIndexer.php'
        }
      }]
    }],
    'Magento_InventoryConfiguration': [{
      'around': [{
        'active': 1,
        'name': 'aroundBeforeSave',
        'className': 'Magento\\InventoryConfiguration\\Plugin\\CatalogInventory\\Model\\System\\Config\\Backend\\Minqty\\AllowNegativeMinQtyInConfigPlugin',
        'line': 20,
        'file': '\/vendor\/magento\/module-inventory-configuration\/Plugin\/CatalogInventory\/Model\/System\/Config\/Backend\/Minqty\/AllowNegativeMinQtyInConfigPlugin.php',
        'origin': {
          'name': 'beforeSave',
          'className': 'Magento\\CatalogInventory\\Model\\System\\Config\\Backend\\Minqty',
          'line': 19,
          'file': '\/vendor\/magento\/module-catalog-inventory\/Model\/System\/Config\/Backend\/Minqty.php'
        }
      }]
    }],
    'Magento_InventoryDistanceBasedSourceSelection': [{
      'before': [{
        'active': 1,
        'name': 'beforeSave',
        'className': 'Magento\\InventoryDistanceBasedSourceSelection\\Plugin\\FillSourceLatitudeAndLongitude',
        'line': 46,
        'file': '\/vendor\/magento\/module-inventory-distance-based-source-selection\/Plugin\/FillSourceLatitudeAndLongitude.php',
        'origin': {
          'name': 'save',
          'className': 'Magento\\InventoryApi\\Api\\SourceRepositoryInterface',
          'line': 39,
          'file': '\/vendor\/magento\/module-inventory-api\/Api\/SourceRepositoryInterface.php'
        }
      }]
    }],
    'Magento_InventoryIndexer': [{
      'after': [{
        'active': 1,
        'name': 'afterExecute',
        'className': 'Magento\\InventoryIndexer\\Plugin\\InventoryApi\\ReindexAfterSourceItemsSavePlugin',
        'line': 47,
        'file': '\/vendor\/magento\/module-inventory-indexer\/Plugin\/InventoryApi\/ReindexAfterSourceItemsSavePlugin.php',
        'origin': {
          'name': 'execute',
          'className': 'Magento\\InventoryApi\\Api\\SourceItemsSaveInterface',
          'line': 29,
          'file': '\/vendor\/magento\/module-inventory-api\/Api\/SourceItemsSaveInterface.php'
        }
      }]
    }, {
      'around': [{
        'active': 1,
        'name': 'aroundExecute',
        'className': 'Magento\\InventoryIndexer\\Plugin\\InventoryApi\\ReindexAfterSourceItemsDeletePlugin',
        'line': 39,
        'file': '\/vendor\/magento\/module-inventory-indexer\/Plugin\/InventoryApi\/ReindexAfterSourceItemsDeletePlugin.php',
        'origin': {
          'name': 'execute',
          'className': 'Magento\\InventoryApi\\Api\\SourceItemsDeleteInterface',
          'line': 28,
          'file': '\/vendor\/magento\/module-inventory-api\/Api\/SourceItemsDeleteInterface.php'
        }
      }]
    }, {
      'around': [{
        'active': 1,
        'name': 'aroundSave',
        'className': 'Magento\\InventoryIndexer\\Plugin\\InventoryApi\\InvalidateAfterEnablingOrDisablingSourcePlugin',
        'line': 52,
        'file': '\/vendor\/magento\/module-inventory-indexer\/Plugin\/InventoryApi\/InvalidateAfterEnablingOrDisablingSourcePlugin.php',
        'origin': {
          'name': 'save',
          'className': 'Magento\\InventoryApi\\Api\\SourceRepositoryInterface',
          'line': 39,
          'file': '\/vendor\/magento\/module-inventory-api\/Api\/SourceRepositoryInterface.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterExecute',
        'className': 'Magento\\InventoryIndexer\\Plugin\\InventoryApi\\InvalidateAfterStockSourceLinksSavePlugin',
        'line': 38,
        'file': '\/vendor\/magento\/module-inventory-indexer\/Plugin\/InventoryApi\/InvalidateAfterStockSourceLinksSavePlugin.php',
        'origin': {
          'name': 'execute',
          'className': 'Magento\\InventoryApi\\Api\\StockSourceLinksSaveInterface',
          'line': 28,
          'file': '\/vendor\/magento\/module-inventory-api\/Api\/StockSourceLinksSaveInterface.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterExecute',
        'className': 'Magento\\InventoryIndexer\\Plugin\\InventoryApi\\InvalidateAfterStockSourceLinksDeletePlugin',
        'line': 39,
        'file': '\/vendor\/magento\/module-inventory-indexer\/Plugin\/InventoryApi\/InvalidateAfterStockSourceLinksDeletePlugin.php',
        'origin': {
          'name': 'execute',
          'className': 'Magento\\InventoryApi\\Api\\StockSourceLinksDeleteInterface',
          'line': 27,
          'file': '\/vendor\/magento\/module-inventory-api\/Api\/StockSourceLinksDeleteInterface.php'
        }
      }]
    }],
    'Magento_InventoryGroupedProduct': [{
      'around': [{
        'active': 1,
        'name': 'aroundExecute',
        'className': 'Magento\\InventoryGroupedProduct\\Plugin\\InventoryConfigurationApi\\IsSourceItemManagementAllowedForProductType\\DisableGroupedTypePlugin',
        'line': 25,
        'file': '\/vendor\/magento\/module-inventory-grouped-product\/Plugin\/InventoryConfigurationApi\/IsSourceItemManagementAllowedForProductType\/DisableGroupedTypePlugin.php',
        'origin': {
          'name': 'execute',
          'className': 'Magento\\InventoryConfigurationApi\\Model\\IsSourceItemManagementAllowedForProductTypeInterface',
          'line': 21,
          'file': '\/vendor\/magento\/module-inventory-configuration-api\/Model\/IsSourceItemManagementAllowedForProductTypeInterface.php'
        }
      }]
    }],
    'Magento_InventoryGroupedProductAdminUi': [{
      'after': [{
        'active': 1,
        'name': 'afterSaveProductRelations',
        'className': 'Magento\\InventoryGroupedProductAdminUi\\Plugin\\Catalog\\Model\\Product\\Link\\ProcessSourceItemsAfterSaveAssociatedLinks',
        'line': 51,
        'file': '\/vendor\/magento\/module-inventory-grouped-product-admin-ui\/Plugin\/Catalog\/Model\/Product\/Link\/ProcessSourceItemsAfterSaveAssociatedLinks.php',
        'origin': {
          'name': 'saveProductRelations',
          'className': 'Magento\\Catalog\\Model\\Product\\Link',
          'line': 183,
          'file': '\/vendor\/magento\/module-catalog\/Model\/Product\/Link.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterGetData',
        'className': 'Magento\\InventoryGroupedProductAdminUi\\Plugin\\Ui\\DataProvider\\Product\\Form\\AddQuantityPerSourceToProductsData',
        'line': 50,
        'file': '\/vendor\/magento\/module-inventory-grouped-product-admin-ui\/Plugin\/Ui\/DataProvider\/Product\/Form\/AddQuantityPerSourceToProductsData.php',
        'origin': {
          'name': 'getData',
          'className': 'Magento\\GroupedProduct\\Ui\\DataProvider\\Product\\GroupedProductDataProvider',
          'line': 83,
          'file': '\/vendor\/magento\/module-grouped-product\/Ui\/DataProvider\/Product\/GroupedProductDataProvider.php'
        }
      }]
    }],
    'Magento_InventoryGroupedProductIndexer': [{
      'after': [{
        'active': 1,
        'name': 'afterExecuteList',
        'className': 'Magento\\InventoryGroupedProductIndexer\\Plugin\\InventoryIndexer\\SourceItemIndexerPlugin',
        'line': 39,
        'file': '\/vendor\/magento\/module-inventory-grouped-product-indexer\/Plugin\/InventoryIndexer\/SourceItemIndexerPlugin.php',
        'origin': {
          'name': 'executeList',
          'className': 'Magento\\InventoryIndexer\\Indexer\\SourceItem\\SourceItemIndexer',
          'line': 111,
          'file': '\/vendor\/magento\/module-inventory-indexer\/Indexer\/SourceItem\/SourceItemIndexer.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterExecuteList',
        'className': 'Magento\\InventoryGroupedProductIndexer\\Plugin\\InventoryIndexer\\StockIndexerPlugin',
        'line': 39,
        'file': '\/vendor\/magento\/module-inventory-grouped-product-indexer\/Plugin\/InventoryIndexer\/StockIndexerPlugin.php',
        'origin': {
          'name': 'executeList',
          'className': 'Magento\\InventoryIndexer\\Indexer\\Stock\\StockIndexer',
          'line': 113,
          'file': '\/vendor\/magento\/module-inventory-indexer\/Indexer\/Stock\/StockIndexer.php'
        }
      }]
    }],
    'Magento_InventoryImportExport': [{
      'after': [{
        'active': 1,
        'name': 'afterImport',
        'className': 'Magento\\InventoryImportExport\\Plugin\\Import\\SourceItemImporter',
        'line': 70,
        'file': '\/vendor\/magento\/module-inventory-import-export\/Plugin\/Import\/SourceItemImporter.php',
        'origin': {
          'name': 'import',
          'className': 'Magento\\CatalogImportExport\\Model\\StockItemImporterInterface',
          'line': 28,
          'file': '\/vendor\/magento\/module-catalog-import-export\/Model\/StockItemImporterInterface.php'
        }
      }]
    }],
    'Magento_InventoryCache': [{
      'around': [{
        'active': 1,
        'name': 'aroundExecuteList',
        'className': 'Magento\\InventoryCache\\Plugin\\InventoryIndexer\\Indexer\\Stock\\StockIndexer\\CacheFlush',
        'line': 51,
        'file': '\/vendor\/magento\/module-inventory-cache\/Plugin\/InventoryIndexer\/Indexer\/Stock\/StockIndexer\/CacheFlush.php',
        'origin': {
          'name': 'executeList',
          'className': 'Magento\\InventoryIndexer\\Indexer\\Stock\\StockIndexer',
          'line': 113,
          'file': '\/vendor\/magento\/module-inventory-indexer\/Indexer\/Stock\/StockIndexer.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterExecuteList',
        'className': 'Magento\\InventoryCache\\Plugin\\InventoryIndexer\\Indexer\\Source\\SourceItemIndexer\\CacheFlush',
        'line': 50,
        'file': '\/vendor\/magento\/module-inventory-cache\/Plugin\/InventoryIndexer\/Indexer\/Source\/SourceItemIndexer\/CacheFlush.php',
        'origin': {
          'name': 'executeList',
          'className': 'Magento\\InventoryIndexer\\Indexer\\SourceItem\\SourceItemIndexer',
          'line': 111,
          'file': '\/vendor\/magento\/module-inventory-indexer\/Indexer\/SourceItem\/SourceItemIndexer.php'
        }
      }]
    }],
    'Magento_InventoryLowQuantityNotification': [{
      'around': [{
        'active': 1,
        'name': 'aroundExecute',
        'className': 'Magento\\InventoryLowQuantityNotification\\Plugin\\InventoryCatalogApi\\BulkConfigurationTransferInterfacePlugin',
        'line': 54,
        'file': '\/vendor\/magento\/module-inventory-low-quantity-notification\/Plugin\/InventoryCatalogApi\/BulkConfigurationTransferInterfacePlugin.php',
        'origin': {
          'name': 'execute',
          'className': 'Magento\\InventoryCatalogApi\\Api\\BulkInventoryTransferInterface',
          'line': 26,
          'file': '\/vendor\/magento\/module-inventory-catalog-api\/Api\/BulkInventoryTransferInterface.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterExecute',
        'className': 'Magento\\InventoryLowQuantityNotification\\Plugin\\InventoryCatalogApi\\BulkSourceAssignInterfacePlugin',
        'line': 43,
        'file': '\/vendor\/magento\/module-inventory-low-quantity-notification\/Plugin\/InventoryCatalogApi\/BulkSourceAssignInterfacePlugin.php',
        'origin': {
          'name': 'execute',
          'className': 'Magento\\InventoryCatalogApi\\Api\\BulkSourceAssignInterface',
          'line': 24,
          'file': '\/vendor\/magento\/module-inventory-catalog-api\/Api\/BulkSourceAssignInterface.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterExecute',
        'className': 'Magento\\InventoryLowQuantityNotification\\Plugin\\InventoryCatalogApi\\BulkSourceUnassignInterfacePlugin',
        'line': 43,
        'file': '\/vendor\/magento\/module-inventory-low-quantity-notification\/Plugin\/InventoryCatalogApi\/BulkSourceUnassignInterfacePlugin.php',
        'origin': {
          'name': 'execute',
          'className': 'Magento\\InventoryCatalogApi\\Api\\BulkSourceUnassignInterface',
          'line': 24,
          'file': '\/vendor\/magento\/module-inventory-catalog-api\/Api\/BulkSourceUnassignInterface.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterExecute',
        'className': 'Magento\\InventoryLowQuantityNotification\\Plugin\\InventoryApi\\SourceItemsDeleteInterfacePlugin',
        'line': 42,
        'file': '\/vendor\/magento\/module-inventory-low-quantity-notification\/Plugin\/InventoryApi\/SourceItemsDeleteInterfacePlugin.php',
        'origin': {
          'name': 'execute',
          'className': 'Magento\\InventoryApi\\Api\\SourceItemsDeleteInterface',
          'line': 28,
          'file': '\/vendor\/magento\/module-inventory-api\/Api\/SourceItemsDeleteInterface.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterExecute',
        'className': 'Magento\\InventoryLowQuantityNotification\\Plugin\\InventoryLowQuantityNotificationApi\\UpdateLegacyStockItemConfigurationAtSourceItemConfigurationSavePlugin',
        'line': 75,
        'file': '\/vendor\/magento\/module-inventory-low-quantity-notification\/Plugin\/InventoryLowQuantityNotificationApi\/UpdateLegacyStockItemConfigurationAtSourceItemConfigurationSavePlugin.php',
        'origin': {
          'name': 'execute',
          'className': 'Magento\\InventoryLowQuantityNotificationApi\\Api\\SourceItemConfigurationsSaveInterface',
          'line': 24,
          'file': '\/vendor\/magento\/module-inventory-low-quantity-notification-api\/Api\/SourceItemConfigurationsSaveInterface.php'
        }
      }]
    }],
    'Magento_InventoryProductAlert': [{
      'around': [{
        'active': 1,
        'name': 'aroundIsSalable',
        'className': 'Magento\\InventoryProductAlert\\Plugin\\AdaptProductSalabilityPlugin',
        'line': 56,
        'file': '\/vendor\/magento\/module-inventory-product-alert\/Plugin\/AdaptProductSalabilityPlugin.php',
        'origin': {
          'name': 'isSalable',
          'className': 'Magento\\ProductAlert\\Model\\ProductSalability',
          'line': 24,
          'file': '\/vendor\/magento\/module-product-alert\/Model\/ProductSalability.php'
        }
      }]
    }],
    'Magento_InventoryRequisitionList': [{
      'around': [{
        'active': 1,
        'name': 'aroundValidate',
        'className': 'Magento\\InventoryRequisitionList\\Plugin\\Model\\RequisitionListItem\\Validator\\StockPlugin',
        'line': 81,
        'file': false,
        'origin': {
          'name': 'aroundValidate',
          'className': 'Magento\\RequisitionList\\Model\\RequisitionListItem\\Validator\\Stock',
          'line': 0,
          'file': false,
          'error': 'Base class not found'
        }
      }]
    }],
    'Magento_InventorySalesAdminUi': [{
      'after': [{
        'active': 1,
        'name': 'afterGetData',
        'className': 'Magento\\InventorySalesAdminUi\\Plugin\\InventoryAdminUi\\Ui\\StockDataProvider\\SalesChannels',
        'line': 46,
        'file': '\/vendor\/magento\/module-inventory-sales-admin-ui\/Plugin\/InventoryAdminUi\/Ui\/StockDataProvider\/SalesChannels.php',
        'origin': {
          'name': 'getData',
          'className': 'Magento\\InventoryAdminUi\\Ui\\DataProvider\\StockDataProvider',
          'line': 126,
          'file': '\/vendor\/magento\/module-inventory-admin-ui\/Ui\/DataProvider\/StockDataProvider.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterSave',
        'className': 'Magento\\InventorySalesAdminUi\\Plugin\\InventoryApi\\StockRepository\\AddNoticeForUnassignedSalesChannels',
        'line': 55,
        'file': '\/vendor\/magento\/module-inventory-sales-admin-ui\/Plugin\/InventoryApi\/StockRepository\/AddNoticeForUnassignedSalesChannels.php',
        'origin': {
          'name': 'save',
          'className': 'Magento\\InventoryApi\\Api\\StockRepositoryInterface',
          'line': 36,
          'file': '\/vendor\/magento\/module-inventory-api\/Api\/StockRepositoryInterface.php'
        }
      }]
    }],
    'Magento_InventorySalesFrontendUi': [{
      'around': [{
        'active': 1,
        'name': 'aroundIsMsgVisible',
        'className': 'Magento\\InventorySalesFrontendUi\\Plugin\\Block\\Stockqty\\AbstractStockqtyPlugin',
        'line': 65,
        'file': '\/vendor\/magento\/module-inventory-sales-frontend-ui\/Plugin\/Block\/Stockqty\/AbstractStockqtyPlugin.php',
        'origin': {
          'name': 'isMsgVisible',
          'className': 'Magento\\CatalogInventory\\Block\\Stockqty\\AbstractStockqty',
          'line': 132,
          'file': '\/vendor\/magento\/module-catalog-inventory\/Block\/Stockqty\/AbstractStockqty.php'
        }
      }, {
        'active': 1,
        'name': 'aroundGetStockQtyLeft',
        'className': 'Magento\\InventorySalesFrontendUi\\Plugin\\Block\\Stockqty\\AbstractStockqtyPlugin',
        'line': 92,
        'file': '\/vendor\/magento\/module-inventory-sales-frontend-ui\/Plugin\/Block\/Stockqty\/AbstractStockqtyPlugin.php',
        'origin': {
          'name': 'getStockQtyLeft',
          'className': 'Magento\\CatalogInventory\\Block\\Stockqty\\AbstractStockqty',
          'line': 144,
          'file': '\/vendor\/magento\/module-catalog-inventory\/Block\/Stockqty\/AbstractStockqty.php'
        }
      }]
    }],
    'Magento_InventorySetupFixtureGenerator': [{
      'before': [{
        'active': 1,
        'name': 'beforeCreate',
        'className': 'Magento\\InventorySetupFixtureGenerator\\Plugin\\Setup\\Model\\FixtureGenerator\\EntityGeneratorFactory\\UpdateCustomTableMapPlugin',
        'line': 26,
        'file': '\/vendor\/magento\/module-inventory-setup-fixture-generator\/Plugin\/Setup\/Model\/FixtureGenerator\/EntityGeneratorFactory\/UpdateCustomTableMapPlugin.php',
        'origin': {
          'name': 'create',
          'className': 'Magento\\Setup\\Model\\FixtureGenerator\\EntityGeneratorFactory',
          'line': 41,
          'file': '\/generated\/code\/Magento\/Setup\/Model\/FixtureGenerator\/EntityGeneratorFactory.php'
        }
      }]
    }],
    'Magento_InventoryShipping': [{
      'after': [{
        'active': 1,
        'name': 'afterCreate',
        'className': 'Magento\\InventoryShipping\\Plugin\\Sales\\Shipment\\AssignSourceCodeToShipmentPlugin',
        'line': 76,
        'file': '\/vendor\/magento\/module-inventory-shipping\/Plugin\/Sales\/Shipment\/AssignSourceCodeToShipmentPlugin.php',
        'origin': {
          'name': 'create',
          'className': 'Magento\\Sales\\Model\\Order\\ShipmentFactory',
          'line': 74,
          'file': '\/vendor\/magento\/module-sales\/Model\/Order\/ShipmentFactory.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterSave',
        'className': 'Magento\\InventoryShipping\\Plugin\\Sales\\ResourceModel\\Order\\Shipment\\SaveSourceForShipmentPlugin',
        'line': 46,
        'file': '\/vendor\/magento\/module-inventory-shipping\/Plugin\/Sales\/ResourceModel\/Order\/Shipment\/SaveSourceForShipmentPlugin.php',
        'origin': {
          'name': 'save',
          'className': 'Magento\\Sales\\Model\\ResourceModel\\Order\\Shipment',
          'line': 392,
          'file': '\/vendor\/magento\/module-sales\/Model\/ResourceModel\/Order\/Shipment.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterGetList',
        'className': 'Magento\\InventoryShipping\\Plugin\\Sales\\Model\\Order\\GetListShipmentRepositoryPlugin',
        'line': 50,
        'file': '\/vendor\/magento\/module-inventory-shipping\/Plugin\/Sales\/Model\/Order\/GetListShipmentRepositoryPlugin.php',
        'origin': {
          'name': 'getList',
          'className': 'Magento\\Sales\\Api\\ShipmentRepositoryInterface',
          'line': 28,
          'file': '\/vendor\/magento\/module-sales\/Api\/ShipmentRepositoryInterface.php'
        }
      }]
    }],
    'Magento_Invitation': [{
      'after': [{
        'active': 1,
        'name': 'afterIsAllowed',
        'className': 'Magento\\Invitation\\Model\\Plugin\\CustomerRegistration',
        'line': 70,
        'file': '\/vendor\/magento\/module-invitation\/Model\/Plugin\/CustomerRegistration.php',
        'origin': {
          'name': 'isAllowed',
          'className': 'Magento\\Customer\\Model\\Registration',
          'line': 19,
          'file': '\/vendor\/magento\/module-customer\/Model\/Registration.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeDispatch',
        'className': 'Magento\\Invitation\\Controller\\Customer\\Account\\Plugin',
        'line': 54,
        'file': '\/vendor\/magento\/module-invitation\/Controller\/Customer\/Account\/Plugin.php',
        'origin': {
          'name': 'dispatch',
          'className': 'Magento\\Invitation\\Controller\\Customer\\Account\\Confirm',
          'line': 92,
          'file': '\/vendor\/magento\/module-invitation\/Controller\/Customer\/Account\/Confirm.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeDispatch',
        'className': 'Magento\\Invitation\\Controller\\Customer\\Account\\Plugin',
        'line': 54,
        'file': '\/vendor\/magento\/module-invitation\/Controller\/Customer\/Account\/Plugin.php',
        'origin': {
          'name': 'dispatch',
          'className': 'Magento\\Invitation\\Controller\\Customer\\Account\\Confirmation',
          'line': 92,
          'file': '\/vendor\/magento\/module-invitation\/Controller\/Customer\/Account\/Confirmation.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeDispatch',
        'className': 'Magento\\Invitation\\Controller\\Customer\\Account\\Plugin',
        'line': 54,
        'file': '\/vendor\/magento\/module-invitation\/Controller\/Customer\/Account\/Plugin.php',
        'origin': {
          'name': 'dispatch',
          'className': 'Magento\\Invitation\\Controller\\Customer\\Account\\Create',
          'line': 92,
          'file': '\/vendor\/magento\/module-invitation\/Controller\/Customer\/Account\/Create.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeDispatch',
        'className': 'Magento\\Invitation\\Controller\\Customer\\Account\\Plugin',
        'line': 54,
        'file': '\/vendor\/magento\/module-invitation\/Controller\/Customer\/Account\/Plugin.php',
        'origin': {
          'name': 'dispatch',
          'className': 'Magento\\Invitation\\Controller\\Customer\\Account\\CreatePassword',
          'line': 92,
          'file': '\/vendor\/magento\/module-invitation\/Controller\/Customer\/Account\/CreatePassword.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeDispatch',
        'className': 'Magento\\Invitation\\Controller\\Customer\\Account\\Plugin',
        'line': 54,
        'file': '\/vendor\/magento\/module-invitation\/Controller\/Customer\/Account\/Plugin.php',
        'origin': {
          'name': 'dispatch',
          'className': 'Magento\\Invitation\\Controller\\Customer\\Account\\CreatePost',
          'line': 92,
          'file': '\/vendor\/magento\/module-invitation\/Controller\/Customer\/Account\/CreatePost.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeDispatch',
        'className': 'Magento\\Invitation\\Controller\\Customer\\Account\\Plugin',
        'line': 54,
        'file': '\/vendor\/magento\/module-invitation\/Controller\/Customer\/Account\/Plugin.php',
        'origin': {
          'name': 'dispatch',
          'className': 'Magento\\Invitation\\Controller\\Customer\\Account\\Edit',
          'line': 92,
          'file': '\/vendor\/magento\/module-invitation\/Controller\/Customer\/Account\/Edit.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeDispatch',
        'className': 'Magento\\Invitation\\Controller\\Customer\\Account\\Plugin',
        'line': 54,
        'file': '\/vendor\/magento\/module-invitation\/Controller\/Customer\/Account\/Plugin.php',
        'origin': {
          'name': 'dispatch',
          'className': 'Magento\\Invitation\\Controller\\Customer\\Account\\EditPost',
          'line': 92,
          'file': '\/vendor\/magento\/module-invitation\/Controller\/Customer\/Account\/EditPost.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeDispatch',
        'className': 'Magento\\Invitation\\Controller\\Customer\\Account\\Plugin',
        'line': 54,
        'file': '\/vendor\/magento\/module-invitation\/Controller\/Customer\/Account\/Plugin.php',
        'origin': {
          'name': 'dispatch',
          'className': 'Magento\\Invitation\\Controller\\Customer\\Account\\ForgotPassword',
          'line': 92,
          'file': '\/vendor\/magento\/module-invitation\/Controller\/Customer\/Account\/ForgotPassword.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeDispatch',
        'className': 'Magento\\Invitation\\Controller\\Customer\\Account\\Plugin',
        'line': 54,
        'file': '\/vendor\/magento\/module-invitation\/Controller\/Customer\/Account\/Plugin.php',
        'origin': {
          'name': 'dispatch',
          'className': 'Magento\\Invitation\\Controller\\Customer\\Account\\ForgotPasswordPost',
          'line': 92,
          'file': '\/vendor\/magento\/module-invitation\/Controller\/Customer\/Account\/ForgotPasswordPost.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeDispatch',
        'className': 'Magento\\Invitation\\Controller\\Customer\\Account\\Plugin',
        'line': 54,
        'file': '\/vendor\/magento\/module-invitation\/Controller\/Customer\/Account\/Plugin.php',
        'origin': {
          'name': 'dispatch',
          'className': 'Magento\\Invitation\\Controller\\Customer\\Account\\Index',
          'line': 92,
          'file': '\/vendor\/magento\/module-invitation\/Controller\/Customer\/Account\/Index.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeDispatch',
        'className': 'Magento\\Invitation\\Controller\\Customer\\Account\\Plugin',
        'line': 54,
        'file': '\/vendor\/magento\/module-invitation\/Controller\/Customer\/Account\/Plugin.php',
        'origin': {
          'name': 'dispatch',
          'className': 'Magento\\Invitation\\Controller\\Customer\\Account\\Login',
          'line': 92,
          'file': '\/vendor\/magento\/module-invitation\/Controller\/Customer\/Account\/Login.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeDispatch',
        'className': 'Magento\\Invitation\\Controller\\Customer\\Account\\Plugin',
        'line': 54,
        'file': '\/vendor\/magento\/module-invitation\/Controller\/Customer\/Account\/Plugin.php',
        'origin': {
          'name': 'dispatch',
          'className': 'Magento\\Invitation\\Controller\\Customer\\Account\\LoginPost',
          'line': 92,
          'file': '\/vendor\/magento\/module-invitation\/Controller\/Customer\/Account\/LoginPost.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeDispatch',
        'className': 'Magento\\Invitation\\Controller\\Customer\\Account\\Plugin',
        'line': 54,
        'file': '\/vendor\/magento\/module-invitation\/Controller\/Customer\/Account\/Plugin.php',
        'origin': {
          'name': 'dispatch',
          'className': 'Magento\\Invitation\\Controller\\Customer\\Account\\Logout',
          'line': 92,
          'file': '\/vendor\/magento\/module-invitation\/Controller\/Customer\/Account\/Logout.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeDispatch',
        'className': 'Magento\\Invitation\\Controller\\Customer\\Account\\Plugin',
        'line': 54,
        'file': '\/vendor\/magento\/module-invitation\/Controller\/Customer\/Account\/Plugin.php',
        'origin': {
          'name': 'dispatch',
          'className': 'Magento\\Invitation\\Controller\\Customer\\Account\\LogoutSuccess',
          'line': 92,
          'file': '\/vendor\/magento\/module-invitation\/Controller\/Customer\/Account\/LogoutSuccess.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeDispatch',
        'className': 'Magento\\Invitation\\Controller\\Customer\\Account\\Plugin',
        'line': 54,
        'file': '\/vendor\/magento\/module-invitation\/Controller\/Customer\/Account\/Plugin.php',
        'origin': {
          'name': 'dispatch',
          'className': 'Magento\\Invitation\\Controller\\Customer\\Account\\ResetPasswordPost',
          'line': 92,
          'file': '\/vendor\/magento\/module-invitation\/Controller\/Customer\/Account\/ResetPasswordPost.php'
        }
      }]
    }],
    'Magento_Logging': [{
      'before': [{
        'active': 1,
        'name': 'beforeDispatch',
        'className': 'Magento\\Logging\\App\\Action\\Plugin\\Log',
        'line': 38,
        'file': '\/vendor\/magento\/module-logging\/App\/Action\/Plugin\/Log.php',
        'origin': {
          'name': 'dispatch',
          'className': 'Magento\\Framework\\App\\Action\\AbstractAction',
          'line': 53,
          'file': '\/vendor\/magento\/framework\/App\/Action\/AbstractAction.php'
        }
      }]
    }],
    'Magento_MessageQueue': [{
      'after': [{
        'active': 1,
        'name': 'afterSet',
        'className': 'Magento\\MessageQueue\\Model\\Plugin\\ResourceModel\\Lock',
        'line': 36,
        'file': '\/vendor\/magento\/module-message-queue\/Model\/Plugin\/ResourceModel\/Lock.php',
        'origin': {
          'name': 'set',
          'className': 'Magento\\Framework\\App\\MaintenanceMode',
          'line': 80,
          'file': '\/vendor\/magento\/framework\/App\/MaintenanceMode.php'
        }
      }]
    }],
    'Magento_CatalogRuleConfigurable': [{
      'before': [{
        'active': 1,
        'name': 'beforeLoad',
        'className': 'Magento\\CatalogRuleConfigurable\\Plugin\\ConfigurableProduct\\Model\\ResourceModel\\AddCatalogRulePrice',
        'line': 34,
        'file': '\/vendor\/magento\/module-catalog-rule-configurable\/Plugin\/ConfigurableProduct\/Model\/ResourceModel\/AddCatalogRulePrice.php',
        'origin': {
          'name': 'load',
          'className': 'Magento\\ConfigurableProduct\\Model\\ResourceModel\\Product\\Type\\Configurable\\Product\\Collection',
          'line': 816,
          'file': '\/vendor\/magento\/module-configurable-product\/Model\/ResourceModel\/Product\/Type\/Configurable\/Product\/Collection.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterGetMatchingProductIds',
        'className': 'Magento\\CatalogRuleConfigurable\\Plugin\\CatalogRule\\Model\\Rule\\ConfigurableProductHandler',
        'line': 50,
        'file': '\/vendor\/magento\/module-catalog-rule-configurable\/Plugin\/CatalogRule\/Model\/Rule\/ConfigurableProductHandler.php',
        'origin': {
          'name': 'getMatchingProductIds',
          'className': 'Magento\\CatalogRule\\Model\\Rule',
          'line': 341,
          'file': '\/vendor\/magento\/module-catalog-rule\/Model\/Rule.php'
        }
      }]
    }, {
      'around': [{
        'active': 1,
        'name': 'aroundExecuteRow',
        'className': 'Magento\\CatalogRuleConfigurable\\Plugin\\CatalogRule\\Model\\Indexer\\ProductRuleReindex',
        'line': 46,
        'file': '\/vendor\/magento\/module-catalog-rule-configurable\/Plugin\/CatalogRule\/Model\/Indexer\/ProductRuleReindex.php',
        'origin': {
          'name': 'executeRow',
          'className': 'Magento\\CatalogRule\\Model\\Indexer\\Product\\ProductRuleIndexer',
          'line': 122,
          'file': '\/vendor\/magento\/module-catalog-rule\/Model\/Indexer\/Product\/ProductRuleIndexer.php'
        }
      }, {
        'active': 1,
        'name': 'aroundExecuteList',
        'className': 'Magento\\CatalogRuleConfigurable\\Plugin\\CatalogRule\\Model\\Indexer\\ProductRuleReindex',
        'line': 65,
        'file': '\/vendor\/magento\/module-catalog-rule-configurable\/Plugin\/CatalogRule\/Model\/Indexer\/ProductRuleReindex.php',
        'origin': {
          'name': 'executeList',
          'className': 'Magento\\CatalogRule\\Model\\Indexer\\Product\\ProductRuleIndexer',
          'line': 97,
          'file': '\/vendor\/magento\/module-catalog-rule\/Model\/Indexer\/Product\/ProductRuleIndexer.php'
        }
      }]
    }],
    'Magento_MultipleWishlist': [{
      'around': [{
        'active': 1,
        'name': 'aroundGetHeader',
        'className': 'Magento\\MultipleWishlist\\Model\\Plugin\\Rss\\Wishlist',
        'line': 70,
        'file': '\/vendor\/magento\/module-multiple-wishlist\/Model\/Plugin\/Rss\/Wishlist.php',
        'origin': {
          'name': 'getHeader',
          'className': 'Magento\\Wishlist\\Model\\Rss\\Wishlist',
          'line': 221,
          'file': '\/vendor\/magento\/module-wishlist\/Model\/Rss\/Wishlist.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeDispatch',
        'className': 'Magento\\MultipleWishlist\\Controller\\Index\\Plugin',
        'line': 36,
        'file': '\/vendor\/magento\/module-multiple-wishlist\/Controller\/Index\/Plugin.php',
        'origin': {
          'name': 'dispatch',
          'className': 'Magento\\MultipleWishlist\\Controller\\AbstractIndex',
          'line': 92,
          'file': '\/vendor\/magento\/module-multiple-wishlist\/Controller\/AbstractIndex.php'
        }
      }]
    }],
    'Magento_Multishipping': [{
      'before': [{
        'active': 1,
        'name': 'beforeExecute',
        'className': 'Magento\\Multishipping\\Controller\\Checkout\\Plugin',
        'line': 31,
        'file': '\/vendor\/magento\/module-multishipping\/Controller\/Checkout\/Plugin.php',
        'origin': {
          'name': 'execute',
          'className': 'Magento\\Checkout\\Controller\\Cart\\Add',
          'line': 83,
          'file': '\/vendor\/magento\/module-checkout\/Controller\/Cart\/Add.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeExecute',
        'className': 'Magento\\Multishipping\\Controller\\Checkout\\Plugin',
        'line': 31,
        'file': '\/vendor\/magento\/module-multishipping\/Controller\/Checkout\/Plugin.php',
        'origin': {
          'name': 'execute',
          'className': 'Magento\\Checkout\\Controller\\Cart\\UpdatePost',
          'line': 100,
          'file': '\/vendor\/magento\/module-checkout\/Controller\/Cart\/UpdatePost.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeExecute',
        'className': 'Magento\\Multishipping\\Controller\\Checkout\\Plugin',
        'line': 31,
        'file': '\/vendor\/magento\/module-multishipping\/Controller\/Checkout\/Plugin.php',
        'origin': {
          'name': 'execute',
          'className': 'Magento\\Checkout\\Controller\\Index\\Index',
          'line': 21,
          'file': '\/vendor\/magento\/module-checkout\/Controller\/Index\/Index.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeSave',
        'className': 'Magento\\Multishipping\\Model\\Checkout\\Type\\Multishipping\\Plugin',
        'line': 34,
        'file': '\/vendor\/magento\/module-multishipping\/Model\/Checkout\/Type\/Multishipping\/Plugin.php',
        'origin': {
          'name': 'save',
          'className': 'Magento\\Checkout\\Model\\Cart',
          'line': 574,
          'file': '\/vendor\/magento\/module-checkout\/Model\/Cart.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeDispatch',
        'className': 'Magento\\Multishipping\\Model\\Cart\\Controller\\CartPlugin',
        'line': 46,
        'file': '\/vendor\/magento\/module-multishipping\/Model\/Cart\/Controller\/CartPlugin.php',
        'origin': {
          'name': 'dispatch',
          'className': 'Magento\\Checkout\\Controller\\Cart',
          'line': 92,
          'file': '\/vendor\/magento\/module-checkout\/Controller\/Cart.php'
        }
      }]
    }],
    'Magento_NewRelicReporting': [{
      'before': [{
        'active': 1,
        'name': 'beforeCatchException',
        'className': 'Magento\\NewRelicReporting\\Plugin\\HttpPlugin',
        'line': 47,
        'file': '\/vendor\/magento\/module-new-relic-reporting\/Plugin\/HttpPlugin.php',
        'origin': {
          'name': 'catchException',
          'className': 'Magento\\Framework\\App\\Http',
          'line': 175,
          'file': '\/vendor\/magento\/framework\/App\/Http.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterSetAreaCode',
        'className': 'Magento\\NewRelicReporting\\Plugin\\StatePlugin',
        'line': 58,
        'file': '\/vendor\/magento\/module-new-relic-reporting\/Plugin\/StatePlugin.php',
        'origin': {
          'name': 'setAreaCode',
          'className': 'Magento\\Framework\\App\\State',
          'line': 131,
          'file': '\/vendor\/magento\/framework\/App\/State.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeRun',
        'className': 'Magento\\NewRelicReporting\\Plugin\\CommandPlugin',
        'line': 47,
        'file': '\/vendor\/magento\/module-new-relic-reporting\/Plugin\/CommandPlugin.php',
        'origin': {
          'name': 'run',
          'className': 'Symfony\\Component\\Console\\Command\\Command',
          'line': 203,
          'file': '\/vendor\/symfony\/console\/Command\/Command.php'
        }
      }]
    }],
    'Magento_Newsletter': [{
      'after': [{
        'active': 1,
        'name': 'afterSave',
        'className': 'Magento\\Newsletter\\Model\\Plugin\\CustomerPlugin',
        'line': 70,
        'file': '\/vendor\/magento\/module-newsletter\/Model\/Plugin\/CustomerPlugin.php',
        'origin': {
          'name': 'save',
          'className': 'Magento\\Customer\\Api\\CustomerRepositoryInterface',
          'line': 27,
          'file': '\/vendor\/magento\/module-customer\/Api\/CustomerRepositoryInterface.php'
        }
      }, {
        'active': 1,
        'name': 'afterDelete',
        'className': 'Magento\\Newsletter\\Model\\Plugin\\CustomerPlugin',
        'line': 136,
        'file': '\/vendor\/magento\/module-newsletter\/Model\/Plugin\/CustomerPlugin.php',
        'origin': {
          'name': 'delete',
          'className': 'Magento\\Customer\\Api\\CustomerRepositoryInterface',
          'line': 70,
          'file': '\/vendor\/magento\/module-customer\/Api\/CustomerRepositoryInterface.php'
        }
      }, {
        'active': 1,
        'name': 'afterGetById',
        'className': 'Magento\\Newsletter\\Model\\Plugin\\CustomerPlugin',
        'line': 154,
        'file': '\/vendor\/magento\/module-newsletter\/Model\/Plugin\/CustomerPlugin.php',
        'origin': {
          'name': 'getById',
          'className': 'Magento\\Customer\\Api\\CustomerRepositoryInterface',
          'line': 48,
          'file': '\/vendor\/magento\/module-customer\/Api\/CustomerRepositoryInterface.php'
        }
      }],
      'around': [{
        'active': 1,
        'name': 'aroundDeleteById',
        'className': 'Magento\\Newsletter\\Model\\Plugin\\CustomerPlugin',
        'line': 111,
        'file': '\/vendor\/magento\/module-newsletter\/Model\/Plugin\/CustomerPlugin.php',
        'origin': {
          'name': 'deleteById',
          'className': 'Magento\\Customer\\Api\\CustomerRepositoryInterface',
          'line': 80,
          'file': '\/vendor\/magento\/module-customer\/Api\/CustomerRepositoryInterface.php'
        }
      }]
    }],
    'Magento_OfflineShipping': [{
      'after': [{
        'active': 1,
        'name': 'afterIsStateActive',
        'className': 'Magento\\OfflineShipping\\Model\\Plugin\\Checkout\\Block\\Cart\\Shipping',
        'line': 35,
        'file': '\/vendor\/magento\/module-offline-shipping\/Model\/Plugin\/Checkout\/Block\/Cart\/Shipping.php',
        'origin': {
          'name': 'isStateActive',
          'className': 'Magento\\Checkout\\Block\\Cart\\LayoutProcessor',
          'line': 73,
          'file': '\/vendor\/magento\/module-checkout\/Block\/Cart\/LayoutProcessor.php'
        }
      }]
    }],
    'Magento_VersionsCms': [{
      'before': [{
        'active': 1,
        'name': 'beforeSetCmsPageData',
        'className': 'Magento\\VersionsCms\\Controller\\Adminhtml\\Cms\\Page\\InlineEdit\\Plugin',
        'line': 45,
        'file': '\/vendor\/magento\/module-versions-cms\/Controller\/Adminhtml\/Cms\/Page\/InlineEdit\/Plugin.php',
        'origin': {
          'name': 'setCmsPageData',
          'className': 'Magento\\Cms\\Controller\\Adminhtml\\Page\\InlineEdit',
          'line': 169,
          'file': '\/vendor\/magento\/module-cms\/Controller\/Adminhtml\/Page\/InlineEdit.php'
        }
      }]
    }],
    'Magento_PageBuilder': [{
      'before': [{
        'active': 1,
        'name': 'beforeSave',
        'className': 'Magento\\PageBuilder\\Plugin\\Catalog\\Model\\Product\\Attribute\\RepositoryPlugin',
        'line': 35,
        'file': '\/vendor\/magento\/module-page-builder\/Plugin\/Catalog\/Model\/Product\/Attribute\/RepositoryPlugin.php',
        'origin': {
          'name': 'save',
          'className': 'Magento\\Catalog\\Model\\Product\\Attribute\\Repository',
          'line': 109,
          'file': '\/vendor\/magento\/module-catalog\/Model\/Product\/Attribute\/Repository.php'
        }
      }],
      'after': [{
        'active': 1,
        'name': 'afterGet',
        'className': 'Magento\\PageBuilder\\Plugin\\Catalog\\Model\\Product\\Attribute\\RepositoryPlugin',
        'line': 53,
        'file': '\/vendor\/magento\/module-page-builder\/Plugin\/Catalog\/Model\/Product\/Attribute\/RepositoryPlugin.php',
        'origin': {
          'name': 'get',
          'className': 'Magento\\Catalog\\Model\\Product\\Attribute\\Repository',
          'line': 85,
          'file': '\/vendor\/magento\/module-catalog\/Model\/Product\/Attribute\/Repository.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterCreateCollection',
        'className': 'Magento\\PageBuilder\\Plugin\\Catalog\\Block\\Product\\ProductsListPlugin',
        'line': 48,
        'file': '\/vendor\/magento\/module-page-builder\/Plugin\/Catalog\/Block\/Product\/ProductsListPlugin.php',
        'origin': {
          'name': 'createCollection',
          'className': 'Magento\\CatalogWidget\\Block\\Product\\ProductsList',
          'line': 300,
          'file': '\/vendor\/magento\/module-catalog-widget\/Block\/Product\/ProductsList.php'
        }
      }, {
        'active': 1,
        'name': 'afterGetCacheKeyInfo',
        'className': 'Magento\\PageBuilder\\Plugin\\Catalog\\Block\\Product\\ProductsListPlugin',
        'line': 70,
        'file': '\/vendor\/magento\/module-page-builder\/Plugin\/Catalog\/Block\/Product\/ProductsListPlugin.php',
        'origin': {
          'name': 'getCacheKeyInfo',
          'className': 'Magento\\CatalogWidget\\Block\\Product\\ProductsList',
          'line': 186,
          'file': '\/vendor\/magento\/module-catalog-widget\/Block\/Product\/ProductsList.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterGetSid',
        'className': 'Magento\\PageBuilder\\Plugin\\Framework\\Session\\SidResolver',
        'line': 36,
        'file': '\/vendor\/magento\/module-page-builder\/Plugin\/Framework\/Session\/SidResolver.php',
        'origin': {
          'name': 'getSid',
          'className': 'Magento\\Framework\\Session\\SidResolver',
          'line': 100,
          'file': '\/vendor\/magento\/framework\/Session\/SidResolver.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeCreate',
        'className': 'Magento\\PageBuilder\\Plugin\\DesignLoader',
        'line': 67,
        'file': '\/vendor\/magento\/module-page-builder\/Plugin\/DesignLoader.php',
        'origin': {
          'name': 'create',
          'className': 'Magento\\Catalog\\Block\\Product\\ImageFactory',
          'line': 137,
          'file': '\/vendor\/magento\/module-catalog\/Block\/Product\/ImageFactory.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterToOptionArray',
        'className': 'Magento\\PageBuilder\\Plugin\\Model\\Eav\\Adminhtml\\System\\Config\\Source\\InputtypePlugin',
        'line': 39,
        'file': '\/vendor\/magento\/module-page-builder\/Plugin\/Model\/Eav\/Adminhtml\/System\/Config\/Source\/InputtypePlugin.php',
        'origin': {
          'name': 'toOptionArray',
          'className': 'Magento\\Eav\\Model\\Adminhtml\\System\\Config\\Source\\Inputtype',
          'line': 29,
          'file': '\/vendor\/magento\/module-eav\/Model\/Adminhtml\/System\/Config\/Source\/Inputtype.php'
        }
      }, {
        'active': 1,
        'name': 'afterGetVolatileInputTypes',
        'className': 'Magento\\PageBuilder\\Plugin\\Model\\Eav\\Adminhtml\\System\\Config\\Source\\InputtypePlugin',
        'line': 62,
        'file': '\/vendor\/magento\/module-page-builder\/Plugin\/Model\/Eav\/Adminhtml\/System\/Config\/Source\/InputtypePlugin.php',
        'origin': {
          'name': 'getVolatileInputTypes',
          'className': 'Magento\\Eav\\Model\\Adminhtml\\System\\Config\\Source\\Inputtype',
          'line': 41,
          'file': '\/vendor\/magento\/module-eav\/Model\/Adminhtml\/System\/Config\/Source\/Inputtype.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeGetPresentationInputType',
        'className': 'Magento\\PageBuilder\\Plugin\\Model\\Eav\\Attribute\\PresentationPlugin',
        'line': 35,
        'file': '\/vendor\/magento\/module-page-builder\/Plugin\/Model\/Eav\/Attribute\/PresentationPlugin.php',
        'origin': {
          'name': 'getPresentationInputType',
          'className': 'Magento\\Catalog\\Model\\Product\\Attribute\\Frontend\\Inputtype\\Presentation',
          'line': 26,
          'file': '\/vendor\/magento\/module-catalog\/Model\/Product\/Attribute\/Frontend\/Inputtype\/Presentation.php'
        }
      }],
      'after': [{
        'active': 1,
        'name': 'afterConvertPresentationDataToInputType',
        'className': 'Magento\\PageBuilder\\Plugin\\Model\\Eav\\Attribute\\PresentationPlugin',
        'line': 57,
        'file': '\/vendor\/magento\/module-page-builder\/Plugin\/Model\/Eav\/Attribute\/PresentationPlugin.php',
        'origin': {
          'name': 'convertPresentationDataToInputType',
          'className': 'Magento\\Catalog\\Model\\Product\\Attribute\\Frontend\\Inputtype\\Presentation',
          'line': 42,
          'file': '\/vendor\/magento\/module-catalog\/Model\/Product\/Attribute\/Frontend\/Inputtype\/Presentation.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeRenderResult',
        'className': 'Magento\\PageBuilder\\Plugin\\Result\\Page',
        'line': 21,
        'file': '\/vendor\/magento\/module-page-builder\/Plugin\/Result\/Page.php',
        'origin': {
          'name': 'renderResult',
          'className': 'Magento\\Framework\\View\\Result\\Page',
          'line': 162,
          'file': '\/vendor\/magento\/framework\/View\/Result\/Page.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterFilter',
        'className': 'Magento\\PageBuilder\\Plugin\\Filter\\TemplatePlugin',
        'line': 42,
        'file': '\/vendor\/magento\/module-page-builder\/Plugin\/Filter\/TemplatePlugin.php',
        'origin': {
          'name': 'filter',
          'className': 'Magento\\Framework\\Filter\\Template',
          'line': 173,
          'file': '\/vendor\/magento\/framework\/Filter\/Template.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterCustomvarDirective',
        'className': 'Magento\\PageBuilder\\Plugin\\Filter\\CustomVarTemplate',
        'line': 39,
        'file': '\/vendor\/magento\/module-page-builder\/Plugin\/Filter\/CustomVarTemplate.php',
        'origin': {
          'name': 'customvarDirective',
          'className': 'Magento\\Email\\Model\\Template\\Filter',
          'line': 814,
          'file': '\/vendor\/magento\/module-email\/Model\/Template\/Filter.php'
        }
      }]
    }],
    'Magento_AdminGws': [{
      'before': [{
        'active': 1,
        'name': 'beforeChangeParent',
        'className': 'Magento\\AdminGws\\Model\\Plugin\\CategoryResource',
        'line': 38,
        'file': '\/vendor\/magento\/module-admin-gws\/Model\/Plugin\/CategoryResource.php',
        'origin': {
          'name': 'changeParent',
          'className': 'Magento\\Catalog\\Model\\ResourceModel\\Category',
          'line': 948,
          'file': '\/vendor\/magento\/module-catalog\/Model\/ResourceModel\/Category.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeUpdateWebsites',
        'className': 'Magento\\AdminGws\\Model\\Plugin\\ProductAction',
        'line': 36,
        'file': '\/vendor\/magento\/module-admin-gws\/Model\/Plugin\/ProductAction.php',
        'origin': {
          'name': 'updateWebsites',
          'className': 'Magento\\Catalog\\Model\\Product\\Action',
          'line': 155,
          'file': '\/vendor\/magento\/module-catalog\/Model\/Product\/Action.php'
        }
      }]
    }, {
      'around': [{
        'active': 1,
        'name': 'aroundCanRender',
        'className': 'Magento\\AdminGws\\Model\\Block\\Container\\Plugin',
        'line': 50,
        'file': '\/vendor\/magento\/module-admin-gws\/Model\/Block\/Container\/Plugin.php',
        'origin': {
          'name': 'canRender',
          'className': 'Magento\\Backend\\Block\\Widget\\ContainerInterface',
          'line': 22,
          'file': '\/vendor\/magento\/module-backend\/Block\/Widget\/ContainerInterface.php'
        }
      }]
    }, {
      'around': [{
        'active': 1,
        'name': 'aroundGetDefault',
        'className': 'Magento\\AdminGws\\Model\\Plugin\\WebsiteRepository',
        'line': 24,
        'file': '\/vendor\/magento\/module-admin-gws\/Model\/Plugin\/WebsiteRepository.php',
        'origin': {
          'name': 'getDefault',
          'className': 'Magento\\Store\\Api\\WebsiteRepositoryInterface',
          'line': 49,
          'file': '\/vendor\/magento\/module-store\/Api\/WebsiteRepositoryInterface.php'
        }
      }]
    }, {
      'around': [{
        'active': 1,
        'name': 'aroundGetButtonData',
        'className': 'Magento\\AdminGws\\Model\\Plugin\\CategoryEventButton',
        'line': 32,
        'file': '\/vendor\/magento\/module-admin-gws\/Model\/Plugin\/CategoryEventButton.php',
        'origin': {
          'name': 'getButtonData',
          'className': 'Magento\\CatalogEvent\\Block\\Adminhtml\\Catalog\\Category\\Edit\\AddEventButton',
          'line': 60,
          'file': '\/vendor\/magento\/module-catalog-event\/Block\/Adminhtml\/Catalog\/Category\/Edit\/AddEventButton.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterExecute',
        'className': 'Magento\\AdminGws\\Model\\Plugin\\SaveRole',
        'line': 61,
        'file': '\/vendor\/magento\/module-admin-gws\/Model\/Plugin\/SaveRole.php',
        'origin': {
          'name': 'execute',
          'className': 'Magento\\User\\Controller\\Adminhtml\\User\\Role\\SaveRole',
          'line': 74,
          'file': '\/vendor\/magento\/module-user\/Controller\/Adminhtml\/User\/Role\/SaveRole.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterIsActionAllowed',
        'className': 'Magento\\AdminGws\\Ui\\Component\\Plugin\\Catalog\\Product\\MassAction',
        'line': 40,
        'file': '\/vendor\/magento\/module-admin-gws\/Ui\/Component\/Plugin\/Catalog\/Product\/MassAction.php',
        'origin': {
          'name': 'isActionAllowed',
          'className': 'Magento\\Catalog\\Ui\\Component\\Product\\MassAction',
          'line': 83,
          'file': '\/vendor\/magento\/module-catalog\/Ui\/Component\/Product\/MassAction.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterGetButtonData',
        'className': '\\Magento\\AdminGws\\Block\\Adminhtml\\Plugin\\Catalog\\Product\\Edit\\Button\\AddAttribute',
        'line': 36,
        'file': '\/vendor\/magento\/module-admin-gws\/Block\/Adminhtml\/Plugin\/Catalog\/Product\/Edit\/Button\/AddAttribute.php',
        'origin': {
          'name': 'getButtonData',
          'className': 'Magento\\Catalog\\Block\\Adminhtml\\Product\\Edit\\Button\\AddAttribute',
          'line': 16,
          'file': '\/vendor\/magento\/module-catalog\/Block\/Adminhtml\/Product\/Edit\/Button\/AddAttribute.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterPrepareDataSource',
        'className': 'Magento\\AdminGws\\Plugin\\ProductLinkUpdater',
        'line': 69,
        'file': '\/vendor\/magento\/module-admin-gws\/Plugin\/ProductLinkUpdater.php',
        'origin': {
          'name': 'prepareDataSource',
          'className': 'Magento\\Catalog\\Ui\\Component\\Listing\\Columns\\ProductActions',
          'line': 50,
          'file': '\/vendor\/magento\/module-catalog\/Ui\/Component\/Listing\/Columns\/ProductActions.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterExecute',
        'className': 'Magento\\AdminGws\\Plugin\\ProductStoreSwitcherUpdater',
        'line': 45,
        'file': '\/vendor\/magento\/module-admin-gws\/Plugin\/ProductStoreSwitcherUpdater.php',
        'origin': {
          'name': 'execute',
          'className': 'Magento\\Catalog\\Controller\\Adminhtml\\Product\\Edit',
          'line': 44,
          'file': '\/vendor\/magento\/module-catalog\/Controller\/Adminhtml\/Product\/Edit.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterGetStores',
        'className': 'Magento\\AdminGws\\Plugin\\StoreFilter',
        'line': 45,
        'file': '\/vendor\/magento\/module-admin-gws\/Plugin\/StoreFilter.php',
        'origin': {
          'name': 'getStores',
          'className': 'Magento\\Store\\Model\\StoreManagerInterface',
          'line': 67,
          'file': '\/vendor\/magento\/module-store\/Model\/StoreManagerInterface.php'
        }
      }, {
        'active': 1,
        'name': 'afterGetGroups',
        'className': 'Magento\\AdminGws\\Plugin\\StoreFilter',
        'line': 73,
        'file': '\/vendor\/magento\/module-admin-gws\/Plugin\/StoreFilter.php',
        'origin': {
          'name': 'getGroups',
          'className': 'Magento\\Store\\Model\\StoreManagerInterface',
          'line': 115,
          'file': '\/vendor\/magento\/module-store\/Model\/StoreManagerInterface.php'
        }
      }, {
        'active': 1,
        'name': 'afterGetWebsites',
        'className': 'Magento\\AdminGws\\Plugin\\StoreFilter',
        'line': 98,
        'file': '\/vendor\/magento\/module-admin-gws\/Plugin\/StoreFilter.php',
        'origin': {
          'name': 'getWebsites',
          'className': 'Magento\\Store\\Model\\StoreManagerInterface',
          'line': 85,
          'file': '\/vendor\/magento\/module-store\/Model\/StoreManagerInterface.php'
        }
      }, {
        'active': 1,
        'name': 'afterGetDefaultStoreView',
        'className': 'Magento\\AdminGws\\Plugin\\StoreFilter',
        'line': 125,
        'file': '\/vendor\/magento\/module-admin-gws\/Plugin\/StoreFilter.php',
        'origin': {
          'name': 'getDefaultStoreView',
          'className': 'Magento\\Store\\Model\\StoreManagerInterface',
          'line': 99,
          'file': '\/vendor\/magento\/module-store\/Model\/StoreManagerInterface.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeLoadWithFilter',
        'className': 'Magento\\AdminGws\\Plugin\\CollectionFilter',
        'line': 47,
        'file': '\/vendor\/magento\/module-admin-gws\/Plugin\/CollectionFilter.php',
        'origin': {
          'name': 'loadWithFilter',
          'className': 'Magento\\Framework\\Model\\ResourceModel\\Db\\Collection\\AbstractCollection',
          'line': 575,
          'file': '\/vendor\/magento\/framework\/Model\/ResourceModel\/Db\/Collection\/AbstractCollection.php'
        }
      }, {
        'active': 1,
        'name': 'beforeGetSelectCountSql',
        'className': 'Magento\\AdminGws\\Plugin\\CollectionFilter',
        'line': 60,
        'file': '\/vendor\/magento\/module-admin-gws\/Plugin\/CollectionFilter.php',
        'origin': {
          'name': 'getSelectCountSql',
          'className': 'Magento\\Framework\\Model\\ResourceModel\\Db\\Collection\\AbstractCollection',
          'line': 232,
          'file': '\/vendor\/magento\/framework\/Model\/ResourceModel\/Db\/Collection\/AbstractCollection.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterExecute',
        'className': 'Magento\\AdminGws\\Plugin\\Catalog\\Controller\\Adminhtml\\Product\\Action\\Attribute\\StoreSwitcherUpdater',
        'line': 73,
        'file': '\/vendor\/magento\/module-admin-gws\/Plugin\/Catalog\/Controller\/Adminhtml\/Product\/Action\/Attribute\/StoreSwitcherUpdater.php',
        'origin': {
          'name': 'execute',
          'className': 'Magento\\Catalog\\Controller\\Adminhtml\\Product\\Action\\Attribute\\Edit',
          'line': 62,
          'file': '\/vendor\/magento\/module-catalog\/Controller\/Adminhtml\/Product\/Action\/Attribute\/Edit.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterGetSaveUrl',
        'className': 'Magento\\AdminGws\\Plugin\\Catalog\\Block\\Adminhtml\\Product\\Edit\\Action\\Attribute',
        'line': 68,
        'file': '\/vendor\/magento\/module-admin-gws\/Plugin\/Catalog\/Block\/Adminhtml\/Product\/Edit\/Action\/Attribute.php',
        'origin': {
          'name': 'getSaveUrl',
          'className': 'Magento\\Catalog\\Block\\Adminhtml\\Product\\Edit\\Action\\Attribute',
          'line': 140,
          'file': '\/vendor\/magento\/module-catalog\/Block\/Adminhtml\/Product\/Edit\/Action\/Attribute.php'
        }
      }]
    }],
    'Magento_PaymentStaging': [{
      'around': [{
        'active': 1,
        'name': 'aroundIsAvailable',
        'className': 'Magento\\PaymentStaging\\Plugin\\Model\\Method\\PaymentMethodIsAvailable',
        'line': 39,
        'file': '\/vendor\/magento\/module-payment-staging\/Plugin\/Model\/Method\/PaymentMethodIsAvailable.php',
        'origin': {
          'name': 'isAvailable',
          'className': 'Magento\\Payment\\Model\\Method\\AbstractMethod',
          'line': 838,
          'file': '\/vendor\/magento\/module-payment\/Model\/Method\/AbstractMethod.php'
        }
      }]
    }, {
      'around': [{
        'active': 1,
        'name': 'aroundIsAvailable',
        'className': 'Magento\\PaymentStaging\\Plugin\\Model\\Method\\PaymentMethodIsAvailable',
        'line': 39,
        'file': '\/vendor\/magento\/module-payment-staging\/Plugin\/Model\/Method\/PaymentMethodIsAvailable.php',
        'origin': {
          'name': 'isAvailable',
          'className': 'Magento\\Payment\\Model\\Method\\Adapter',
          'line': 279,
          'file': '\/vendor\/magento\/module-payment\/Model\/Method\/Adapter.php'
        }
      }]
    }],
    'Magento_Braintree': [{
      'around': [{
        'active': 0,
        'name': 'aroundPlaceOrder',
        'className': 'Magento\\Braintree\\Plugin\\OrderCancellation',
        'line': 56,
        'file': '\/vendor\/magento\/module-braintree\/Plugin\/OrderCancellation.php',
        'origin': {
          'name': 'placeOrder',
          'className': 'Magento\\Quote\\Api\\CartManagementInterface',
          'line': 66,
          'file': '\/vendor\/magento\/module-quote\/Api\/CartManagementInterface.php'
        }
      }]
    }],
    'MSP_ReCaptcha': [{
      'around': [{
        'active': 0,
        'name': 'aroundGetExcludes',
        'className': 'MSP\\ReCaptcha\\Plugin\\ExcludeFromMinification',
        'line': 34,
        'file': '\/vendor\/msp\/recaptcha\/Plugin\/ExcludeFromMinification.php',
        'origin': {
          'name': 'getExcludes',
          'className': 'Magento\\Framework\\View\\Asset\\Minification',
          'line': 148,
          'file': '\/vendor\/magento\/framework\/View\/Asset\/Minification.php'
        }
      }]
    }, {
      'after': [{
        'active': 0,
        'name': 'afterGetJsLayout',
        'className': 'MSP\\ReCaptcha\\Plugin\\Block\\Account\\AuthenticationPopupPlugin',
        'line': 58,
        'file': '\/vendor\/msp\/recaptcha\/Plugin\/Block\/Account\/AuthenticationPopupPlugin.php',
        'origin': {
          'name': 'getJsLayout',
          'className': 'Magento\\Customer\\Block\\Account\\AuthenticationPopup',
          'line': 47,
          'file': '\/vendor\/magento\/module-customer\/Block\/Account\/AuthenticationPopup.php'
        }
      }]
    }],
    'Magento_Persistent': [{
      'before': [{
        'active': 1,
        'name': 'beforeProcess',
        'className': 'Magento\\Persistent\\Model\\Checkout\\AddressDataProcessorPlugin',
        'line': 54,
        'file': '\/vendor\/magento\/module-persistent\/Model\/Checkout\/AddressDataProcessorPlugin.php',
        'origin': {
          'name': 'process',
          'className': 'Magento\\Quote\\Model\\AddressAdditionalDataProcessor',
          'line': 20,
          'file': '\/vendor\/magento\/module-quote\/Model\/AddressAdditionalDataProcessor.php'
        }
      }]
    }, {
      'around': [{
        'active': 1,
        'name': 'aroundGetSectionData',
        'className': 'Magento\\Persistent\\Model\\Plugin\\CustomerData',
        'line': 57,
        'file': '\/vendor\/magento\/module-persistent\/Model\/Plugin\/CustomerData.php',
        'origin': {
          'name': 'getSectionData',
          'className': 'Magento\\Customer\\CustomerData\\Customer',
          'line': 42,
          'file': '\/vendor\/magento\/module-customer\/CustomerData\/Customer.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeGetVaryString',
        'className': 'Magento\\Persistent\\Model\\Plugin\\PersistentCustomerContext',
        'line': 37,
        'file': '\/vendor\/magento\/module-persistent\/Model\/Plugin\/PersistentCustomerContext.php',
        'origin': {
          'name': 'getVaryString',
          'className': 'Magento\\Framework\\App\\Http\\Context',
          'line': 111,
          'file': '\/vendor\/magento\/framework\/App\/Http\/Context.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterGenerateXml',
        'className': 'Magento\\Persistent\\Model\\Layout\\DepersonalizePlugin',
        'line': 46,
        'file': '\/vendor\/magento\/module-persistent\/Model\/Layout\/DepersonalizePlugin.php',
        'origin': {
          'name': 'generateXml',
          'className': 'Magento\\Framework\\View\\Layout',
          'line': 301,
          'file': '\/vendor\/magento\/framework\/View\/Layout.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeProcess',
        'className': 'Magento\\Persistent\\Model\\Checkout\\AddressDataProcessorPlugin',
        'line': 54,
        'file': '\/vendor\/magento\/module-persistent\/Model\/Checkout\/AddressDataProcessorPlugin.php',
        'origin': {
          'name': 'process',
          'className': 'Magento\\Quote\\Model\\AddressAdditionalDataProcessor',
          'line': 20,
          'file': '\/vendor\/magento\/module-quote\/Model\/AddressAdditionalDataProcessor.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterGetConfig',
        'className': 'Magento\\Persistent\\Model\\Checkout\\ConfigProviderPlugin',
        'line': 68,
        'file': '\/vendor\/magento\/module-persistent\/Model\/Checkout\/ConfigProviderPlugin.php',
        'origin': {
          'name': 'getConfig',
          'className': 'Magento\\Checkout\\Model\\DefaultConfigProvider',
          'line': 291,
          'file': '\/vendor\/magento\/module-checkout\/Model\/DefaultConfigProvider.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeSavePaymentInformationAndPlaceOrder',
        'className': 'Magento\\Persistent\\Model\\Checkout\\GuestPaymentInformationManagementPlugin',
        'line': 96,
        'file': '\/vendor\/magento\/module-persistent\/Model\/Checkout\/GuestPaymentInformationManagementPlugin.php',
        'origin': {
          'name': 'savePaymentInformationAndPlaceOrder',
          'className': 'Magento\\Checkout\\Model\\GuestPaymentInformationManagement',
          'line': 95,
          'file': '\/vendor\/magento\/module-checkout\/Model\/GuestPaymentInformationManagement.php'
        }
      }]
    }],
    'Magento_PersistentHistory': [{
      'before': [{
        'active': 1,
        'name': 'beforeExecute',
        'className': 'Magento\\PersistentHistory\\Plugin\\CleanExpiredQuotesPlugin',
        'line': 17,
        'file': '\/vendor\/magento\/module-persistent-history\/Plugin\/CleanExpiredQuotesPlugin.php',
        'origin': {
          'name': 'execute',
          'className': 'Magento\\Sales\\Cron\\CleanExpiredQuotes',
          'line': 49,
          'file': '\/vendor\/magento\/module-sales\/Cron\/CleanExpiredQuotes.php'
        }
      }]
    }],
    'Magento_PricePermissions': [{
      'around': [{
        'active': 1,
        'name': 'aroundPrepare',
        'className': 'Magento\\PricePermissions\\Ui\\Component\\Listing\\Columns\\Price\\Plugin',
        'line': 32,
        'file': '\/vendor\/magento\/module-price-permissions\/Ui\/Component\/Listing\/Columns\/Price\/Plugin.php',
        'origin': {
          'name': 'prepare',
          'className': 'Magento\\Catalog\\Ui\\Component\\Listing\\Columns\\Price',
          'line': 68,
          'file': '\/vendor\/magento\/module-catalog\/Ui\/Component\/Listing\/Columns\/Price.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterInitialize',
        'className': 'Magento\\PricePermissions\\Controller\\Adminhtml\\Product\\Initialization\\Helper\\Plugin\\PricePermissions',
        'line': 55,
        'file': '\/vendor\/magento\/module-price-permissions\/Controller\/Adminhtml\/Product\/Initialization\/Helper\/Plugin\/PricePermissions.php',
        'origin': {
          'name': 'initialize',
          'className': 'Magento\\Catalog\\Controller\\Adminhtml\\Product\\Initialization\\Helper',
          'line': 228,
          'file': '\/vendor\/magento\/module-catalog\/Controller\/Adminhtml\/Product\/Initialization\/Helper.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeToHtml',
        'className': 'Magento\\PricePermissions\\Block\\Adminhtml\\ConfigurableProduct\\Product\\Edit\\Tab\\Variations\\Plugin\\Config',
        'line': 44,
        'file': '\/vendor\/magento\/module-price-permissions\/Block\/Adminhtml\/ConfigurableProduct\/Product\/Edit\/Tab\/Variations\/Plugin\/Config.php',
        'origin': {
          'name': 'toHtml',
          'className': 'Magento\\ConfigurableProduct\\Block\\Adminhtml\\Product\\Edit\\Tab\\Variations\\Config',
          'line': 661,
          'file': '\/vendor\/magento\/module-configurable-product\/Block\/Adminhtml\/Product\/Edit\/Tab\/Variations\/Config.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterSetupAttributeMeta',
        'className': 'Magento\\PricePermissions\\Ui\\DataProvider\\Product\\Form\\Modifier\\Plugin\\Eav',
        'line': 67,
        'file': '\/vendor\/magento\/module-price-permissions\/Ui\/DataProvider\/Product\/Form\/Modifier\/Plugin\/Eav.php',
        'origin': {
          'name': 'setupAttributeMeta',
          'className': 'Magento\\Catalog\\Ui\\DataProvider\\Product\\Form\\Modifier\\Eav',
          'line': 667,
          'file': '\/vendor\/magento\/module-catalog\/Ui\/DataProvider\/Product\/Form\/Modifier\/Eav.php'
        }
      }, {
        'active': 1,
        'name': 'afterSetupAttributeContainerMeta',
        'className': 'Magento\\PricePermissions\\Ui\\DataProvider\\Product\\Form\\Modifier\\Plugin\\Eav',
        'line': 93,
        'file': '\/vendor\/magento\/module-price-permissions\/Ui\/DataProvider\/Product\/Form\/Modifier\/Plugin\/Eav.php',
        'origin': {
          'name': 'setupAttributeContainerMeta',
          'className': 'Magento\\Catalog\\Ui\\DataProvider\\Product\\Form\\Modifier\\Eav',
          'line': 843,
          'file': '\/vendor\/magento\/module-catalog\/Ui\/DataProvider\/Product\/Form\/Modifier\/Eav.php'
        }
      }, {
        'active': 1,
        'name': 'afterSetupAttributeData',
        'className': 'Magento\\PricePermissions\\Ui\\DataProvider\\Product\\Form\\Modifier\\Plugin\\Eav',
        'line': 112,
        'file': '\/vendor\/magento\/module-price-permissions\/Ui\/DataProvider\/Product\/Form\/Modifier\/Plugin\/Eav.php',
        'origin': {
          'name': 'setupAttributeData',
          'className': 'Magento\\Catalog\\Ui\\DataProvider\\Product\\Form\\Modifier\\Eav',
          'line': 879,
          'file': '\/vendor\/magento\/module-catalog\/Ui\/DataProvider\/Product\/Form\/Modifier\/Eav.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeValidate',
        'className': 'Magento\\PricePermissions\\Model\\Entity\\Attribute\\Backend\\Plugin\\AbstractBackend',
        'line': 37,
        'file': '\/vendor\/magento\/module-price-permissions\/Model\/Entity\/Attribute\/Backend\/Plugin\/AbstractBackend.php',
        'origin': {
          'name': 'validate',
          'className': 'Magento\\Eav\\Model\\Entity\\Attribute\\Backend\\AbstractBackend',
          'line': 231,
          'file': '\/vendor\/magento\/module-eav\/Model\/Entity\/Attribute\/Backend\/AbstractBackend.php'
        }
      }]
    }],
    'Magento_ProductVideo': [{
      'before': [{
        'active': 1,
        'name': 'beforeExecute',
        'className': 'Magento\\ProductVideo\\Model\\Plugin\\Catalog\\Product\\Gallery\\CreateHandler',
        'line': 30,
        'file': '\/vendor\/magento\/module-product-video\/Model\/Plugin\/Catalog\/Product\/Gallery\/CreateHandler.php',
        'origin': {
          'name': 'execute',
          'className': 'Magento\\Catalog\\Model\\Product\\Gallery\\CreateHandler',
          'line': 116,
          'file': '\/vendor\/magento\/module-catalog\/Model\/Product\/Gallery\/CreateHandler.php'
        }
      }],
      'after': [{
        'active': 1,
        'name': 'afterExecute',
        'className': 'Magento\\ProductVideo\\Model\\Plugin\\Catalog\\Product\\Gallery\\CreateHandler',
        'line': 55,
        'file': '\/vendor\/magento\/module-product-video\/Model\/Plugin\/Catalog\/Product\/Gallery\/CreateHandler.php',
        'origin': {
          'name': 'execute',
          'className': 'Magento\\Catalog\\Model\\Product\\Gallery\\CreateHandler',
          'line': 116,
          'file': '\/vendor\/magento\/module-catalog\/Model\/Product\/Gallery\/CreateHandler.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterExecute',
        'className': 'Magento\\ProductVideo\\Model\\Plugin\\Catalog\\Product\\Gallery\\ReadHandler',
        'line': 21,
        'file': '\/vendor\/magento\/module-product-video\/Model\/Plugin\/Catalog\/Product\/Gallery\/ReadHandler.php',
        'origin': {
          'name': 'execute',
          'className': 'Magento\\Catalog\\Model\\Product\\Gallery\\ReadHandler',
          'line': 58,
          'file': '\/vendor\/magento\/module-catalog\/Model\/Product\/Gallery\/ReadHandler.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterDuplicate',
        'className': 'Magento\\ProductVideo\\Model\\Plugin\\ExternalVideoResourceBackend',
        'line': 38,
        'file': '\/vendor\/magento\/module-product-video\/Model\/Plugin\/ExternalVideoResourceBackend.php',
        'origin': {
          'name': 'duplicate',
          'className': 'Magento\\Catalog\\Model\\ResourceModel\\Product\\Gallery',
          'line': 406,
          'file': '\/vendor\/magento\/module-catalog\/Model\/ResourceModel\/Product\/Gallery.php'
        }
      }, {
        'active': 1,
        'name': 'afterCreateBatchBaseSelect',
        'className': 'Magento\\ProductVideo\\Model\\Plugin\\ExternalVideoResourceBackend',
        'line': 56,
        'file': '\/vendor\/magento\/module-product-video\/Model\/Plugin\/ExternalVideoResourceBackend.php',
        'origin': {
          'name': 'createBatchBaseSelect',
          'className': 'Magento\\Catalog\\Model\\ResourceModel\\Product\\Gallery',
          'line': 171,
          'file': '\/vendor\/magento\/module-catalog\/Model\/ResourceModel\/Product\/Gallery.php'
        }
      }]
    }],
    'Magento_PromotionPermissions': [{
      'after': [{
        'active': 1,
        'name': 'afterCanRender',
        'className': 'Magento\\PromotionPermissions\\Block\\Adminhtml\\Promo\\Catalog\\Plugin',
        'line': 40,
        'file': '\/vendor\/magento\/module-promotion-permissions\/Block\/Adminhtml\/Promo\/Catalog\/Plugin.php',
        'origin': {
          'name': 'canRender',
          'className': 'Magento\\CatalogRule\\Block\\Adminhtml\\Promo\\Catalog',
          'line': 202,
          'file': '\/vendor\/magento\/module-catalog-rule\/Block\/Adminhtml\/Promo\/Catalog.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterCanRender',
        'className': 'Magento\\PromotionPermissions\\Block\\Adminhtml\\Promo\\Catalog\\Edit\\GenericButton\\Plugin',
        'line': 38,
        'file': '\/vendor\/magento\/module-promotion-permissions\/Block\/Adminhtml\/Promo\/Catalog\/Edit\/GenericButton\/Plugin.php',
        'origin': {
          'name': 'canRender',
          'className': 'Magento\\CatalogRule\\Block\\Adminhtml\\Edit\\GenericButton',
          'line': 70,
          'file': '\/vendor\/magento\/module-catalog-rule\/Block\/Adminhtml\/Edit\/GenericButton.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterCanRender',
        'className': 'Magento\\PromotionPermissions\\Block\\Adminhtml\\Promo\\Quote\\Plugin',
        'line': 40,
        'file': '\/vendor\/magento\/module-promotion-permissions\/Block\/Adminhtml\/Promo\/Quote\/Plugin.php',
        'origin': {
          'name': 'canRender',
          'className': 'Magento\\SalesRule\\Block\\Adminhtml\\Promo\\Quote',
          'line': 202,
          'file': '\/vendor\/magento\/module-sales-rule\/Block\/Adminhtml\/Promo\/Quote.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterCanRender',
        'className': 'Magento\\PromotionPermissions\\Block\\Adminhtml\\Promo\\Quote\\Edit\\GenericButton\\Plugin',
        'line': 36,
        'file': '\/vendor\/magento\/module-promotion-permissions\/Block\/Adminhtml\/Promo\/Quote\/Edit\/GenericButton\/Plugin.php',
        'origin': {
          'name': 'canRender',
          'className': 'Magento\\SalesRule\\Block\\Adminhtml\\Promo\\Quote\\Edit\\GenericButton',
          'line': 70,
          'file': '\/vendor\/magento\/module-sales-rule\/Block\/Adminhtml\/Promo\/Quote\/Edit\/GenericButton.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterCanRender',
        'className': 'Magento\\PromotionPermissions\\Block\\Adminhtml\\Reminder\\Plugin',
        'line': 37,
        'file': '\/vendor\/magento\/module-promotion-permissions\/Block\/Adminhtml\/Reminder\/Plugin.php',
        'origin': {
          'name': 'canRender',
          'className': 'Magento\\Reminder\\Block\\Adminhtml\\Reminder',
          'line': 202,
          'file': '\/vendor\/magento\/module-reminder\/Block\/Adminhtml\/Reminder.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterCanRender',
        'className': 'Magento\\PromotionPermissions\\Block\\Adminhtml\\Reminder\\Edit\\Plugin',
        'line': 37,
        'file': '\/vendor\/magento\/module-promotion-permissions\/Block\/Adminhtml\/Reminder\/Edit\/Plugin.php',
        'origin': {
          'name': 'canRender',
          'className': 'Magento\\Reminder\\Block\\Adminhtml\\Reminder\\Edit',
          'line': 202,
          'file': '\/vendor\/magento\/module-reminder\/Block\/Adminhtml\/Reminder\/Edit.php'
        }
      }]
    }],
    'Magento_Reward': [{
      'before': [{
        'active': 1,
        'name': 'beforeSave',
        'className': 'Magento\\Reward\\Model\\Plugin\\RewardPointsRefund',
        'line': 92,
        'file': '\/vendor\/magento\/module-reward\/Model\/Plugin\/RewardPointsRefund.php',
        'origin': {
          'name': 'save',
          'className': 'Magento\\Sales\\Model\\ResourceModel\\Order\\Creditmemo',
          'line': 392,
          'file': '\/vendor\/magento\/module-sales\/Model\/ResourceModel\/Order\/Creditmemo.php'
        }
      }],
      'after': [{
        'active': 1,
        'name': 'afterSave',
        'className': 'Magento\\Reward\\Model\\Plugin\\RewardPointsRefund',
        'line': 132,
        'file': '\/vendor\/magento\/module-reward\/Model\/Plugin\/RewardPointsRefund.php',
        'origin': {
          'name': 'save',
          'className': 'Magento\\Sales\\Model\\ResourceModel\\Order\\Creditmemo',
          'line': 392,
          'file': '\/vendor\/magento\/module-sales\/Model\/ResourceModel\/Order\/Creditmemo.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterGet',
        'className': 'Magento\\Reward\\Model\\Plugin\\CartTotalRepository',
        'line': 44,
        'file': '\/vendor\/magento\/module-reward\/Model\/Plugin\/CartTotalRepository.php',
        'origin': {
          'name': 'get',
          'className': 'Magento\\Quote\\Model\\Cart\\CartTotalRepository',
          'line': 86,
          'file': '\/vendor\/magento\/module-quote\/Model\/Cart\/CartTotalRepository.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterGetValidColumnNames',
        'className': 'Magento\\Reward\\Model\\Plugin\\ImportCustomer',
        'line': 26,
        'file': '\/vendor\/magento\/module-reward\/Model\/Plugin\/ImportCustomer.php',
        'origin': {
          'name': 'getValidColumnNames',
          'className': 'Magento\\CustomerImportExport\\Model\\Import\\Customer',
          'line': 654,
          'file': '\/vendor\/magento\/module-customer-import-export\/Model\/Import\/Customer.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeCollect',
        'className': 'Magento\\Reward\\Model\\Plugin\\TotalsCollector',
        'line': 21,
        'file': '\/vendor\/magento\/module-reward\/Model\/Plugin\/TotalsCollector.php',
        'origin': {
          'name': 'collect',
          'className': 'Magento\\Quote\\Model\\Quote\\TotalsCollector',
          'line': 125,
          'file': '\/vendor\/magento\/module-quote\/Model\/Quote\/TotalsCollector.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterGet',
        'className': 'Magento\\Reward\\Model\\Plugin\\OrderRepository',
        'line': 25,
        'file': '\/vendor\/magento\/module-reward\/Model\/Plugin\/OrderRepository.php',
        'origin': {
          'name': 'get',
          'className': 'Magento\\Sales\\Api\\OrderRepositoryInterface',
          'line': 37,
          'file': '\/vendor\/magento\/module-sales\/Api\/OrderRepositoryInterface.php'
        }
      }, {
        'active': 1,
        'name': 'afterGetList',
        'className': 'Magento\\Reward\\Model\\Plugin\\OrderRepository',
        'line': 51,
        'file': '\/vendor\/magento\/module-reward\/Model\/Plugin\/OrderRepository.php',
        'origin': {
          'name': 'getList',
          'className': 'Magento\\Sales\\Api\\OrderRepositoryInterface',
          'line': 29,
          'file': '\/vendor\/magento\/module-sales\/Api\/OrderRepositoryInterface.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeBeforeSave',
        'className': 'Magento\\Reward\\Model\\Plugin\\CustomerPlugin',
        'line': 42,
        'file': '\/vendor\/magento\/module-reward\/Model\/Plugin\/CustomerPlugin.php',
        'origin': {
          'name': 'beforeSave',
          'className': 'Magento\\Customer\\Model\\Customer',
          'line': 696,
          'file': '\/vendor\/magento\/module-customer\/Model\/Customer.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterCreateAccountWithPasswordHash',
        'className': 'Magento\\Reward\\Model\\Plugin\\CustomerRegister',
        'line': 76,
        'file': '\/vendor\/magento\/module-reward\/Model\/Plugin\/CustomerRegister.php',
        'origin': {
          'name': 'createAccountWithPasswordHash',
          'className': 'Magento\\Customer\\Model\\AccountManagement',
          'line': 842,
          'file': '\/vendor\/magento\/module-customer\/Model\/AccountManagement.php'
        }
      }]
    }],
    'Magento_SalesRuleStaging': [{
      'before': [{
        'active': 1,
        'name': 'beforeSetValidationFilter',
        'className': 'Magento\\SalesRuleStaging\\Model\\ResourceModel\\Plugin\\Rule\\Collection',
        'line': 40,
        'file': '\/vendor\/magento\/module-sales-rule-staging\/Model\/ResourceModel\/Plugin\/Rule\/Collection.php',
        'origin': {
          'name': 'setValidationFilter',
          'className': 'Magento\\SalesRule\\Model\\ResourceModel\\Rule\\Collection',
          'line': 155,
          'file': '\/vendor\/magento\/module-sales-rule\/Model\/ResourceModel\/Rule\/Collection.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeGetFromDate',
        'className': 'Magento\\SalesRuleStaging\\Model\\Plugin\\DateResolverPlugin',
        'line': 50,
        'file': '\/vendor\/magento\/module-sales-rule-staging\/Model\/Plugin\/DateResolverPlugin.php',
        'origin': {
          'name': 'getFromDate',
          'className': 'Magento\\SalesRule\\Model\\Rule',
          'line': 544,
          'file': '\/vendor\/magento\/module-sales-rule\/Model\/Rule.php'
        }
      }, {
        'active': 1,
        'name': 'beforeGetToDate',
        'className': 'Magento\\SalesRuleStaging\\Model\\Plugin\\DateResolverPlugin',
        'line': 66,
        'file': '\/vendor\/magento\/module-sales-rule-staging\/Model\/Plugin\/DateResolverPlugin.php',
        'origin': {
          'name': 'getToDate',
          'className': 'Magento\\SalesRule\\Model\\Rule',
          'line': 555,
          'file': '\/vendor\/magento\/module-sales-rule\/Model\/Rule.php'
        }
      }]
    }, {
      'around': [{
        'active': 1,
        'name': 'aroundGetData',
        'className': 'Magento\\Staging\\Model\\Entity\\DataProvider\\DataProviderPlugin',
        'line': 52,
        'file': '\/vendor\/magento\/module-staging\/Model\/Entity\/DataProvider\/DataProviderPlugin.php',
        'origin': {
          'name': 'getData',
          'className': 'Magento\\SalesRuleStaging\\Model\\Rule\\FormDataProvider',
          'line': 93,
          'file': '\/vendor\/magento\/module-sales-rule-staging\/Model\/Rule\/FormDataProvider.php'
        }
      }]
    }, {
      'around': [{
        'active': 1,
        'name': 'aroundGetData',
        'className': 'Magento\\Staging\\Model\\Entity\\DataProvider\\Identifier\\DataProviderPlugin',
        'line': 52,
        'file': '\/vendor\/magento\/module-staging\/Model\/Entity\/DataProvider\/Identifier\/DataProviderPlugin.php',
        'origin': {
          'name': 'getData',
          'className': 'Magento\\SalesRuleStaging\\Model\\Rule\\Identifier\\DataProvider',
          'line': 15,
          'file': '\/vendor\/magento\/module-sales-rule-staging\/Model\/Rule\/Identifier\/DataProvider.php'
        }
      }]
    }, {
      'around': [{
        'active': 1,
        'name': 'aroundGetConditionsFieldSetId',
        'className': 'Magento\\SalesRuleStaging\\Model\\Plugin\\ConditionFieldsetIdResolver',
        'line': 31,
        'file': '\/vendor\/magento\/module-sales-rule-staging\/Model\/Plugin\/ConditionFieldsetIdResolver.php',
        'origin': {
          'name': 'getConditionsFieldSetId',
          'className': 'Magento\\SalesRule\\Model\\Rule',
          'line': 620,
          'file': '\/vendor\/magento\/module-sales-rule\/Model\/Rule.php'
        }
      }]
    }],
    'Magento_Rma': [{
      'after': [{
        'active': 1,
        'name': 'afterGetFullHistory',
        'className': 'Magento\\Rma\\Block\\Adminhtml\\Order\\View\\Tab\\HistoryPlugin',
        'line': 47,
        'file': '\/vendor\/magento\/module-rma\/Block\/Adminhtml\/Order\/View\/Tab\/HistoryPlugin.php',
        'origin': {
          'name': 'getFullHistory',
          'className': 'Magento\\Sales\\Block\\Adminhtml\\Order\\View\\Tab\\History',
          'line': 72,
          'file': '\/vendor\/magento\/module-sales\/Block\/Adminhtml\/Order\/View\/Tab\/History.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterGet',
        'className': 'Magento\\Rma\\Model\\Rma\\Plugin\\Authorization',
        'line': 39,
        'file': '\/vendor\/magento\/module-rma\/Model\/Rma\/Plugin\/Authorization.php',
        'origin': {
          'name': 'get',
          'className': 'Magento\\Rma\\Model\\RmaRepository',
          'line': 98,
          'file': '\/vendor\/magento\/module-rma\/Model\/RmaRepository.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeInitializeFromData',
        'className': 'Magento\\Rma\\Plugin\\Catalog\\Controller\\Adminhtml\\Product\\Initialization\\HelperPlugin',
        'line': 29,
        'file': '\/vendor\/magento\/module-rma\/Plugin\/Catalog\/Controller\/Adminhtml\/Product\/Initialization\/HelperPlugin.php',
        'origin': {
          'name': 'initializeFromData',
          'className': 'Magento\\Catalog\\Controller\\Adminhtml\\Product\\Initialization\\Helper',
          'line': 154,
          'file': '\/vendor\/magento\/module-catalog\/Controller\/Adminhtml\/Product\/Initialization\/Helper.php'
        }
      }]
    }],
    'Magento_Rss': [{
      'around': [{
        'active': 1,
        'name': 'aroundDispatch',
        'className': 'Magento\\Rss\\App\\Action\\Plugin\\BackendAuthentication',
        'line': 101,
        'file': '\/vendor\/magento\/module-rss\/App\/Action\/Plugin\/BackendAuthentication.php',
        'origin': {
          'name': 'dispatch',
          'className': 'Magento\\Rss\\Controller\\Adminhtml\\Feed\\Index',
          'line': 206,
          'file': '\/vendor\/magento\/module-rss\/Controller\/Adminhtml\/Feed\/Index.php'
        }
      }]
    }],
    'Magento_AdvancedSalesRule': [{
      'around': [{
        'active': 1,
        'name': 'aroundSave',
        'className': 'Magento\\AdvancedSalesRule\\Model\\Plugin\\Rule',
        'line': 42,
        'file': '\/vendor\/magento\/module-advanced-sales-rule\/Model\/Plugin\/Rule.php',
        'origin': {
          'name': 'save',
          'className': 'Magento\\SalesRule\\Model\\Rule',
          'line': 653,
          'file': '\/vendor\/magento\/module-sales-rule\/Model\/Rule.php'
        }
      }]
    }, {
      'around': [{
        'active': 1,
        'name': 'aroundSetValidationFilter',
        'className': 'Magento\\AdvancedSalesRule\\Model\\ResourceModel\\Plugin\\Rule\\Collection',
        'line': 51,
        'file': '\/vendor\/magento\/module-advanced-sales-rule\/Model\/ResourceModel\/Plugin\/Rule\/Collection.php',
        'origin': {
          'name': 'setValidationFilter',
          'className': 'Magento\\SalesRule\\Model\\ResourceModel\\Rule\\Collection',
          'line': 155,
          'file': '\/vendor\/magento\/module-sales-rule\/Model\/ResourceModel\/Rule\/Collection.php'
        }
      }]
    }],
    'Magento_BannerCustomerSegment': [{
      'after': [{
        'active': 1,
        'name': 'afterPrepareSaveData',
        'className': 'Magento\\BannerCustomerSegment\\Plugin\\Model\\Banner\\ValidatorPlugin',
        'line': 32,
        'file': '\/vendor\/magento\/module-banner-customer-segment\/Plugin\/Model\/Banner\/ValidatorPlugin.php',
        'origin': {
          'name': 'prepareSaveData',
          'className': 'Magento\\Banner\\Model\\Banner\\Validator',
          'line': 49,
          'file': '\/vendor\/magento\/module-banner\/Model\/Banner\/Validator.php'
        }
      }]
    }],
    'Magento_Signifyd': [{
      'after': [{
        'active': 1,
        'name': 'afterCancel',
        'className': 'Magento\\Signifyd\\Plugin\\OrderPlugin',
        'line': 42,
        'file': '\/vendor\/magento\/module-signifyd\/Plugin\/OrderPlugin.php',
        'origin': {
          'name': 'cancel',
          'className': 'Magento\\Sales\\Model\\Order',
          'line': 1226,
          'file': '\/vendor\/magento\/module-sales\/Model\/Order.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterDenyPayment',
        'className': 'Magento\\Signifyd\\Plugin\\PaymentPlugin',
        'line': 44,
        'file': '\/vendor\/magento\/module-signifyd\/Plugin\/PaymentPlugin.php',
        'origin': {
          'name': 'denyPayment',
          'className': 'Magento\\Payment\\Model\\MethodInterface',
          'line': 349,
          'file': '\/vendor\/magento\/module-payment\/Model\/MethodInterface.php'
        }
      }]
    }],
    'Magento_SalesInventory': [{
      'after': [{
        'active': 1,
        'name': 'afterExecute',
        'className': 'Magento\\SalesInventory\\Model\\Plugin\\Order\\ReturnToStockOrder',
        'line': 71,
        'file': '\/vendor\/magento\/module-sales-inventory\/Model\/Plugin\/Order\/ReturnToStockOrder.php',
        'origin': {
          'name': 'execute',
          'className': 'Magento\\Sales\\Model\\RefundOrder',
          'line': 119,
          'file': '\/vendor\/magento\/module-sales\/Model\/RefundOrder.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterExecute',
        'className': 'Magento\\SalesInventory\\Model\\Plugin\\Order\\ReturnToStockInvoice',
        'line': 73,
        'file': '\/vendor\/magento\/module-sales-inventory\/Model\/Plugin\/Order\/ReturnToStockInvoice.php',
        'origin': {
          'name': 'execute',
          'className': 'Magento\\Sales\\Model\\RefundInvoice',
          'line': 127,
          'file': '\/vendor\/magento\/module-sales\/Model\/RefundInvoice.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterValidate',
        'className': 'Magento\\SalesInventory\\Model\\Plugin\\Order\\Validation\\OrderRefundCreationArguments',
        'line': 49,
        'file': '\/vendor\/magento\/module-sales-inventory\/Model\/Plugin\/Order\/Validation\/OrderRefundCreationArguments.php',
        'origin': {
          'name': 'validate',
          'className': 'Magento\\Sales\\Model\\Order\\Validation\\RefundOrderInterface',
          'line': 31,
          'file': '\/vendor\/magento\/module-sales\/Model\/Order\/Validation\/RefundOrderInterface.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterValidate',
        'className': 'Magento\\SalesInventory\\Model\\Plugin\\Order\\Validation\\InvoiceRefundCreationArguments',
        'line': 52,
        'file': '\/vendor\/magento\/module-sales-inventory\/Model\/Plugin\/Order\/Validation\/InvoiceRefundCreationArguments.php',
        'origin': {
          'name': 'validate',
          'className': 'Magento\\Sales\\Model\\Order\\Validation\\RefundInvoiceInterface',
          'line': 34,
          'file': '\/vendor\/magento\/module-sales\/Model\/Order\/Validation\/RefundInvoiceInterface.php'
        }
      }]
    }],
    'Magento_CatalogRuleStaging': [{
      'before': [{
        'active': 1,
        'name': 'beforeGetFromDate',
        'className': 'Magento\\CatalogRuleStaging\\Model\\Plugin\\DateResolverPlugin',
        'line': 46,
        'file': '\/vendor\/magento\/module-catalog-rule-staging\/Model\/Plugin\/DateResolverPlugin.php',
        'origin': {
          'name': 'getFromDate',
          'className': 'Magento\\CatalogRule\\Model\\Rule',
          'line': 827,
          'file': '\/vendor\/magento\/module-catalog-rule\/Model\/Rule.php'
        }
      }, {
        'active': 1,
        'name': 'beforeGetToDate',
        'className': 'Magento\\CatalogRuleStaging\\Model\\Plugin\\DateResolverPlugin',
        'line': 60,
        'file': '\/vendor\/magento\/module-catalog-rule-staging\/Model\/Plugin\/DateResolverPlugin.php',
        'origin': {
          'name': 'getToDate',
          'className': 'Magento\\CatalogRule\\Model\\Rule',
          'line': 835,
          'file': '\/vendor\/magento\/module-catalog-rule\/Model\/Rule.php'
        }
      }]
    }, {
      'around': [{
        'active': 1,
        'name': 'aroundExecute',
        'className': 'Magento\\CatalogRuleStaging\\Model\\Plugin\\FinalPricePlugin',
        'line': 39,
        'file': '\/vendor\/magento\/module-catalog-rule-staging\/Model\/Plugin\/FinalPricePlugin.php',
        'origin': {
          'name': 'execute',
          'className': 'Magento\\CatalogRule\\Observer\\ProcessFrontFinalPriceObserver',
          'line': 74,
          'file': '\/vendor\/magento\/module-catalog-rule\/Observer\/ProcessFrontFinalPriceObserver.php'
        }
      }]
    }, {
      'around': [{
        'active': 1,
        'name': 'aroundGetConditionsFieldSetId',
        'className': 'Magento\\CatalogRuleStaging\\Model\\Plugin\\ConditionFieldsetIdResolver',
        'line': 31,
        'file': '\/vendor\/magento\/module-catalog-rule-staging\/Model\/Plugin\/ConditionFieldsetIdResolver.php',
        'origin': {
          'name': 'getConditionsFieldSetId',
          'className': 'Magento\\CatalogRule\\Model\\Rule',
          'line': 670,
          'file': '\/vendor\/magento\/module-catalog-rule\/Model\/Rule.php'
        }
      }]
    }, {
      'around': [{
        'active': 1,
        'name': 'aroundGetData',
        'className': 'Magento\\Staging\\Model\\Entity\\DataProvider\\DataProviderPlugin',
        'line': 52,
        'file': '\/vendor\/magento\/module-staging\/Model\/Entity\/DataProvider\/DataProviderPlugin.php',
        'origin': {
          'name': 'getData',
          'className': 'Magento\\CatalogRuleStaging\\Model\\Rule\\DataProvider',
          'line': 60,
          'file': '\/vendor\/magento\/module-catalog-rule-staging\/Model\/Rule\/DataProvider.php'
        }
      }]
    }, {
      'around': [{
        'active': 1,
        'name': 'aroundGetData',
        'className': 'Magento\\Staging\\Model\\Entity\\DataProvider\\Identifier\\DataProviderPlugin',
        'line': 52,
        'file': '\/vendor\/magento\/module-staging\/Model\/Entity\/DataProvider\/Identifier\/DataProviderPlugin.php',
        'origin': {
          'name': 'getData',
          'className': 'Magento\\CatalogRuleStaging\\Model\\Rule\\Identifier\\DataProvider',
          'line': 15,
          'file': '\/vendor\/magento\/module-catalog-rule-staging\/Model\/Rule\/Identifier\/DataProvider.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeCanRender',
        'className': 'Magento\\CatalogRuleStaging\\Block\\Adminhtml\\Promo\\Catalog\\Plugin',
        'line': 22,
        'file': '\/vendor\/magento\/module-catalog-rule-staging\/Block\/Adminhtml\/Promo\/Catalog\/Plugin.php',
        'origin': {
          'name': 'canRender',
          'className': 'Magento\\CatalogRule\\Block\\Adminhtml\\Promo\\Catalog',
          'line': 202,
          'file': '\/vendor\/magento\/module-catalog-rule\/Block\/Adminhtml\/Promo\/Catalog.php'
        }
      }]
    }],
    'Magento_BannerPageBuilder': [{
      'after': [{
        'active': 1,
        'name': 'afterGetWidgetAttributes',
        'className': 'Magento\\BannerPageBuilder\\Plugin\\Widget\\Banner',
        'line': 45,
        'file': '\/vendor\/magento\/module-banner-page-builder\/Plugin\/Widget\/Banner.php',
        'origin': {
          'name': 'getWidgetAttributes',
          'className': 'Magento\\Banner\\Block\\Widget\\Banner',
          'line': 255,
          'file': '\/vendor\/magento\/module-banner\/Block\/Widget\/Banner.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterRender',
        'className': 'Magento\\BannerPageBuilder\\Plugin\\CmsStaticBlockRenderer',
        'line': 39,
        'file': '\/vendor\/magento\/module-banner-page-builder\/Plugin\/CmsStaticBlockRenderer.php',
        'origin': {
          'name': 'render',
          'className': 'Magento\\PageBuilder\\Model\\Stage\\Renderer\\CmsStaticBlock',
          'line': 75,
          'file': '\/vendor\/magento\/module-page-builder\/Model\/Stage\/Renderer\/CmsStaticBlock.php'
        }
      }]
    }],
    'Magento_ScalableCheckout': [{
      'before': [{
        'active': 1,
        'name': 'beforeDelete',
        'className': 'Magento\\Framework\\ForeignKey\\ObjectRelationProcessor\\Plugin',
        'line': 61,
        'file': '\/vendor\/magento\/framework-foreign-key\/ObjectRelationProcessor\/Plugin.php',
        'origin': {
          'name': 'delete',
          'className': 'Magento\\Framework\\Model\\ResourceModel\\Db\\ObjectRelationProcessor',
          'line': 29,
          'file': '\/vendor\/magento\/framework\/Model\/ResourceModel\/Db\/ObjectRelationProcessor.php'
        }
      }, {
        'active': 1,
        'name': 'beforeValidateDataIntegrity',
        'className': 'Magento\\Framework\\ForeignKey\\ObjectRelationProcessor\\Plugin',
        'line': 94,
        'file': '\/vendor\/magento\/framework-foreign-key\/ObjectRelationProcessor\/Plugin.php',
        'origin': {
          'name': 'validateDataIntegrity',
          'className': 'Magento\\Framework\\Model\\ResourceModel\\Db\\ObjectRelationProcessor',
          'line': 47,
          'file': '\/vendor\/magento\/framework\/Model\/ResourceModel\/Db\/ObjectRelationProcessor.php'
        }
      }]
    }],
    'Magento_ScalableOms': [{
      'before': [{
        'active': 1,
        'name': 'beforeDelete',
        'className': 'Magento\\Framework\\ForeignKey\\ObjectRelationProcessor\\Plugin',
        'line': 61,
        'file': '\/vendor\/magento\/framework-foreign-key\/ObjectRelationProcessor\/Plugin.php',
        'origin': {
          'name': 'delete',
          'className': 'Magento\\Framework\\Model\\ResourceModel\\Db\\ObjectRelationProcessor',
          'line': 29,
          'file': '\/vendor\/magento\/framework\/Model\/ResourceModel\/Db\/ObjectRelationProcessor.php'
        }
      }, {
        'active': 1,
        'name': 'beforeValidateDataIntegrity',
        'className': 'Magento\\Framework\\ForeignKey\\ObjectRelationProcessor\\Plugin',
        'line': 94,
        'file': '\/vendor\/magento\/framework-foreign-key\/ObjectRelationProcessor\/Plugin.php',
        'origin': {
          'name': 'validateDataIntegrity',
          'className': 'Magento\\Framework\\Model\\ResourceModel\\Db\\ObjectRelationProcessor',
          'line': 47,
          'file': '\/vendor\/magento\/framework\/Model\/ResourceModel\/Db\/ObjectRelationProcessor.php'
        }
      }]
    }],
    'Magento_CatalogPermissions': [{
      'after': [{
        'active': 1,
        'name': 'afterGetFilters',
        'className': 'Magento\\CatalogPermissions\\Model\\Plugin\\Catalog\\Model\\Layer\\FilterList',
        'line': 80,
        'file': '\/vendor\/magento\/module-catalog-permissions\/Model\/Plugin\/Catalog\/Model\/Layer\/FilterList.php',
        'origin': {
          'name': 'getFilters',
          'className': 'Magento\\Catalog\\Model\\Layer\\FilterList',
          'line': 66,
          'file': '\/vendor\/magento\/module-catalog\/Model\/Layer\/FilterList.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterSave',
        'className': 'Magento\\CatalogPermissions\\Model\\Indexer\\Plugin\\Store\\View',
        'line': 31,
        'file': '\/vendor\/magento\/module-catalog-permissions\/Model\/Indexer\/Plugin\/Store\/View.php',
        'origin': {
          'name': 'save',
          'className': 'Magento\\Store\\Model\\ResourceModel\\Store',
          'line': 392,
          'file': '\/vendor\/magento\/module-store\/Model\/ResourceModel\/Store.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterSave',
        'className': 'Magento\\CatalogPermissions\\Model\\Indexer\\Plugin\\Store\\Group',
        'line': 35,
        'file': '\/vendor\/magento\/module-catalog-permissions\/Model\/Indexer\/Plugin\/Store\/Group.php',
        'origin': {
          'name': 'save',
          'className': 'Magento\\Store\\Model\\ResourceModel\\Group',
          'line': 392,
          'file': '\/vendor\/magento\/module-store\/Model\/ResourceModel\/Group.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterImportSource',
        'className': 'Magento\\CatalogPermissions\\Model\\Indexer\\Plugin\\Import',
        'line': 40,
        'file': '\/vendor\/magento\/module-catalog-permissions\/Model\/Indexer\/Plugin\/Import.php',
        'origin': {
          'name': 'importSource',
          'className': 'Magento\\ImportExport\\Model\\Import',
          'line': 464,
          'file': '\/vendor\/magento\/module-import-export\/Model\/Import.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterSetStatus',
        'className': 'Magento\\CatalogPermissions\\Model\\Indexer\\Plugin\\MviewState',
        'line': 57,
        'file': '\/vendor\/magento\/module-catalog-permissions\/Model\/Indexer\/Plugin\/MviewState.php',
        'origin': {
          'name': 'setStatus',
          'className': 'Magento\\Framework\\Mview\\View\\StateInterface',
          'line': 93,
          'file': '\/vendor\/magento\/framework\/Mview\/View\/StateInterface.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterGet',
        'className': 'Magento\\CatalogPermissions\\Model\\Indexer\\Plugin\\IndexerConfigData',
        'line': 39,
        'file': '\/vendor\/magento\/module-catalog-permissions\/Model\/Indexer\/Plugin\/IndexerConfigData.php',
        'origin': {
          'name': 'get',
          'className': 'Magento\\Indexer\\Model\\Config\\Data',
          'line': 132,
          'file': '\/vendor\/magento\/module-indexer\/Model\/Config\/Data.php'
        }
      }]
    }, {
      'around': [{
        'active': 1,
        'name': 'aroundSave',
        'className': 'Magento\\CatalogPermissions\\Model\\Indexer\\Plugin\\GroupRepository',
        'line': 49,
        'file': '\/vendor\/magento\/module-catalog-permissions\/Model\/Indexer\/Plugin\/GroupRepository.php',
        'origin': {
          'name': 'save',
          'className': 'Magento\\Customer\\Api\\GroupRepositoryInterface',
          'line': 26,
          'file': '\/vendor\/magento\/module-customer\/Api\/GroupRepositoryInterface.php'
        }
      }],
      'after': [{
        'active': 1,
        'name': 'afterDelete',
        'className': 'Magento\\CatalogPermissions\\Model\\Indexer\\Plugin\\GroupRepository',
        'line': 72,
        'file': '\/vendor\/magento\/module-catalog-permissions\/Model\/Indexer\/Plugin\/GroupRepository.php',
        'origin': {
          'name': 'delete',
          'className': 'Magento\\Customer\\Api\\GroupRepositoryInterface',
          'line': 62,
          'file': '\/vendor\/magento\/module-customer\/Api\/GroupRepositoryInterface.php'
        }
      }, {
        'active': 1,
        'name': 'afterDeleteById',
        'className': 'Magento\\CatalogPermissions\\Model\\Indexer\\Plugin\\GroupRepository',
        'line': 84,
        'file': '\/vendor\/magento\/module-catalog-permissions\/Model\/Indexer\/Plugin\/GroupRepository.php',
        'origin': {
          'name': 'deleteById',
          'className': 'Magento\\Customer\\Api\\GroupRepositoryInterface',
          'line': 73,
          'file': '\/vendor\/magento\/module-customer\/Api\/GroupRepositoryInterface.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterSave',
        'className': 'Magento\\CatalogPermissions\\Model\\Indexer\\Plugin\\Product',
        'line': 16,
        'file': '\/vendor\/magento\/module-catalog-permissions\/Model\/Indexer\/Plugin\/Product.php',
        'origin': {
          'name': 'save',
          'className': 'Magento\\Catalog\\Model\\Product',
          'line': 653,
          'file': '\/vendor\/magento\/module-catalog\/Model\/Product.php'
        }
      }, {
        'active': 1,
        'name': 'afterDelete',
        'className': 'Magento\\CatalogPermissions\\Model\\Indexer\\Plugin\\Product',
        'line': 28,
        'file': '\/vendor\/magento\/module-catalog-permissions\/Model\/Indexer\/Plugin\/Product.php',
        'origin': {
          'name': 'delete',
          'className': 'Magento\\Catalog\\Model\\Product',
          'line': 843,
          'file': '\/vendor\/magento\/module-catalog\/Model\/Product.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterUpdateAttributes',
        'className': 'Magento\\CatalogPermissions\\Model\\Indexer\\Plugin\\Product\\Action',
        'line': 24,
        'file': '\/vendor\/magento\/module-catalog-permissions\/Model\/Indexer\/Plugin\/Product\/Action.php',
        'origin': {
          'name': 'updateAttributes',
          'className': 'Magento\\Catalog\\Model\\Product\\Action',
          'line': 88,
          'file': '\/vendor\/magento\/module-catalog\/Model\/Product\/Action.php'
        }
      }, {
        'active': 1,
        'name': 'afterUpdateWebsites',
        'className': 'Magento\\CatalogPermissions\\Model\\Indexer\\Plugin\\Product\\Action',
        'line': 47,
        'file': '\/vendor\/magento\/module-catalog-permissions\/Model\/Indexer\/Plugin\/Product\/Action.php',
        'origin': {
          'name': 'updateWebsites',
          'className': 'Magento\\Catalog\\Model\\Product\\Action',
          'line': 155,
          'file': '\/vendor\/magento\/module-catalog\/Model\/Product\/Action.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterSave',
        'className': 'Magento\\CatalogPermissions\\Model\\Indexer\\Plugin\\Category',
        'line': 57,
        'file': '\/vendor\/magento\/module-catalog-permissions\/Model\/Indexer\/Plugin\/Category.php',
        'origin': {
          'name': 'save',
          'className': 'Magento\\Catalog\\Model\\Category',
          'line': 653,
          'file': '\/vendor\/magento\/module-catalog\/Model\/Category.php'
        }
      }],
      'around': [{
        'active': 1,
        'name': 'aroundMove',
        'className': 'Magento\\CatalogPermissions\\Model\\Indexer\\Plugin\\Category',
        'line': 81,
        'file': '\/vendor\/magento\/module-catalog-permissions\/Model\/Indexer\/Plugin\/Category.php',
        'origin': {
          'name': 'move',
          'className': 'Magento\\Catalog\\Model\\Category',
          'line': 392,
          'file': '\/vendor\/magento\/module-catalog\/Model\/Category.php'
        }
      }]
    }, {
      'around': [{
        'active': 1,
        'name': 'aroundSave',
        'className': 'Magento\\CatalogPermissions\\Model\\Indexer\\Plugin\\ConfigData',
        'line': 94,
        'file': '\/vendor\/magento\/module-catalog-permissions\/Model\/Indexer\/Plugin\/ConfigData.php',
        'origin': {
          'name': 'save',
          'className': 'Magento\\Config\\Model\\Config',
          'line': 177,
          'file': '\/vendor\/magento\/module-config\/Model\/Config.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeToHtml',
        'className': 'Magento\\CatalogPermissions\\Model\\Plugin\\Theme\\Block\\Html\\Topmenu',
        'line': 50,
        'file': '\/vendor\/magento\/module-catalog-permissions\/Model\/Plugin\/Theme\/Block\/Html\/Topmenu.php',
        'origin': {
          'name': 'toHtml',
          'className': 'Magento\\Theme\\Block\\Html\\Topmenu',
          'line': 661,
          'file': '\/vendor\/magento\/module-theme\/Block\/Html\/Topmenu.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterGetCacheKey',
        'className': 'Magento\\CatalogPermissions\\Plugin\\Framework\\Pricing\\Render\\CanShowPricePlugin',
        'line': 24,
        'file': '\/vendor\/magento\/module-catalog-permissions\/Plugin\/Framework\/Pricing\/Render\/CanShowPricePlugin.php',
        'origin': {
          'name': 'getCacheKey',
          'className': 'Magento\\Framework\\Pricing\\Render\\PriceBox',
          'line': 75,
          'file': '\/vendor\/magento\/framework\/Pricing\/Render\/PriceBox.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterPrepareMeta',
        'className': 'Magento\\CatalogPermissions\\Model\\Plugin\\Catalog\\Category\\DataProvider',
        'line': 45,
        'file': '\/vendor\/magento\/module-catalog-permissions\/Model\/Plugin\/Catalog\/Category\/DataProvider.php',
        'origin': {
          'name': 'prepareMeta',
          'className': 'Magento\\Catalog\\Model\\Category\\DataProvider',
          'line': 273,
          'file': '\/vendor\/magento\/module-catalog\/Model\/Category\/DataProvider.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterGetCacheKeyInfo',
        'className': 'Magento\\CatalogPermissions\\Plugin\\Theme\\Block\\Html\\Topmenu',
        'line': 50,
        'file': '\/vendor\/magento\/module-catalog-permissions\/Plugin\/Theme\/Block\/Html\/Topmenu.php',
        'origin': {
          'name': 'getCacheKeyInfo',
          'className': 'Magento\\Theme\\Block\\Html\\Topmenu',
          'line': 334,
          'file': '\/vendor\/magento\/module-theme\/Block\/Html\/Topmenu.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterGetIdentities',
        'className': 'Magento\\CatalogPermissions\\Plugin\\UpdateIdentitiesPlugin',
        'line': 51,
        'file': '\/vendor\/magento\/module-catalog-permissions\/Plugin\/UpdateIdentitiesPlugin.php',
        'origin': {
          'name': 'getIdentities',
          'className': 'Magento\\Catalog\\Block\\Product\\View',
          'line': 324,
          'file': '\/vendor\/magento\/module-catalog\/Block\/Product\/View.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterGetData',
        'className': 'Magento\\CatalogPermissions\\Plugin\\UpdateCachePlugin',
        'line': 59,
        'file': '\/vendor\/magento\/module-catalog-permissions\/Plugin\/UpdateCachePlugin.php',
        'origin': {
          'name': 'getData',
          'className': 'Magento\\Framework\\App\\Http\\Context',
          'line': 95,
          'file': '\/vendor\/magento\/framework\/App\/Http\/Context.php'
        }
      }]
    }],
    'Magento_SendFriend': [{
      'after': [{
        'active': 1,
        'name': 'afterCanEmailToFriend',
        'className': 'Magento\\SendFriend\\Block\\Plugin\\Catalog\\Product\\View',
        'line': 31,
        'file': '\/vendor\/magento\/module-send-friend\/Block\/Plugin\/Catalog\/Product\/View.php',
        'origin': {
          'name': 'canEmailToFriend',
          'className': 'Magento\\Catalog\\Block\\Product\\View',
          'line': 142,
          'file': '\/vendor\/magento\/module-catalog\/Block\/Product\/View.php'
        }
      }]
    }],
    'Magento_InventoryShippingAdminUi': [{
      'after': [{
        'active': 1,
        'name': 'afterCanCreateShipment',
        'className': 'Magento\\InventoryShippingAdminUi\\Plugin\\Sales\\Block\\Order\\Invoice\\Create\\DisallowCreateShipmentPlugin',
        'line': 48,
        'file': '\/vendor\/magento\/module-inventory-shipping-admin-ui\/Plugin\/Sales\/Block\/Order\/Invoice\/Create\/DisallowCreateShipmentPlugin.php',
        'origin': {
          'name': 'canCreateShipment',
          'className': 'Magento\\Sales\\Block\\Adminhtml\\Order\\Invoice\\Create\\Form',
          'line': 62,
          'file': '\/vendor\/magento\/module-sales\/Block\/Adminhtml\/Order\/Invoice\/Create\/Form.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterGetBackUrl',
        'className': 'Magento\\InventoryShippingAdminUi\\Plugin\\Sales\\Block\\Shipment\\BackButtonUrlOnNewShipmentPagePlugin',
        'line': 48,
        'file': '\/vendor\/magento\/module-inventory-shipping-admin-ui\/Plugin\/Sales\/Block\/Shipment\/BackButtonUrlOnNewShipmentPagePlugin.php',
        'origin': {
          'name': 'getBackUrl',
          'className': 'Magento\\Shipping\\Block\\Adminhtml\\Create',
          'line': 73,
          'file': '\/vendor\/magento\/module-shipping\/Block\/Adminhtml\/Create.php'
        }
      }]
    }],
    'Magento_SalesArchive': [{
      'after': [{
        'active': 1,
        'name': 'afterGetIds',
        'className': 'Magento\\SalesArchive\\Plugin\\ArchivedEntitiesProcessorPlugin',
        'line': 59,
        'file': '\/vendor\/magento\/module-sales-archive\/Plugin\/ArchivedEntitiesProcessorPlugin.php',
        'origin': {
          'name': 'getIds',
          'className': 'Magento\\Sales\\Model\\ResourceModel\\Provider\\UpdatedIdListProvider',
          'line': 39,
          'file': '\/vendor\/magento\/module-sales\/Model\/ResourceModel\/Provider\/UpdatedIdListProvider.php'
        }
      }]
    }],
    'Magento_CheckoutStaging': [{
      'before': [{
        'active': 1,
        'name': 'beforeSavePaymentInformationAndPlaceOrder',
        'className': 'Magento\\CheckoutStaging\\Plugin\\PaymentInformationManagementPlugin',
        'line': 46,
        'file': '\/vendor\/magento\/module-checkout-staging\/Plugin\/PaymentInformationManagementPlugin.php',
        'origin': {
          'name': 'savePaymentInformationAndPlaceOrder',
          'className': 'Magento\\Checkout\\Api\\PaymentInformationManagementInterface',
          'line': 24,
          'file': '\/vendor\/magento\/module-checkout\/Api\/PaymentInformationManagementInterface.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeSavePaymentInformationAndPlaceOrder',
        'className': 'Magento\\CheckoutStaging\\Plugin\\GuestPaymentInformationManagementPlugin',
        'line': 47,
        'file': '\/vendor\/magento\/module-checkout-staging\/Plugin\/GuestPaymentInformationManagementPlugin.php',
        'origin': {
          'name': 'savePaymentInformationAndPlaceOrder',
          'className': 'Magento\\Checkout\\Api\\GuestPaymentInformationManagementInterface',
          'line': 25,
          'file': '\/vendor\/magento\/module-checkout\/Api\/GuestPaymentInformationManagementInterface.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterSave',
        'className': 'Magento\\CheckoutStaging\\Plugin\\SavePreviewQuotaPlugin',
        'line': 56,
        'file': '\/vendor\/magento\/module-checkout-staging\/Plugin\/SavePreviewQuotaPlugin.php',
        'origin': {
          'name': 'save',
          'className': 'Magento\\Quote\\Api\\CartRepositoryInterface',
          'line': 72,
          'file': '\/vendor\/magento\/module-quote\/Api\/CartRepositoryInterface.php'
        }
      }]
    }],
    'Magento_Webapi': [{
      'after': [{
        'active': 1,
        'name': 'afterProcessIntegrationConfig',
        'className': 'Magento\\Webapi\\Model\\Plugin\\Manager',
        'line': 64,
        'file': '\/vendor\/magento\/module-webapi\/Model\/Plugin\/Manager.php',
        'origin': {
          'name': 'processIntegrationConfig',
          'className': 'Magento\\Integration\\Model\\ConfigBasedIntegrationManager',
          'line': 59,
          'file': '\/vendor\/magento\/module-integration\/Model\/ConfigBasedIntegrationManager.php'
        }
      }, {
        'active': 1,
        'name': 'afterProcessConfigBasedIntegrations',
        'className': 'Magento\\Webapi\\Model\\Plugin\\Manager',
        'line': 96,
        'file': '\/vendor\/magento\/module-webapi\/Model\/Plugin\/Manager.php',
        'origin': {
          'name': 'processConfigBasedIntegrations',
          'className': 'Magento\\Integration\\Model\\ConfigBasedIntegrationManager',
          'line': 102,
          'file': '\/vendor\/magento\/module-integration\/Model\/ConfigBasedIntegrationManager.php'
        }
      }]
    }],
    'Magento_Swatches': [{
      'before': [{
        'active': 1,
        'name': 'beforeBeforeSave',
        'className': 'Magento\\Swatches\\Model\\Plugin\\EavAttribute',
        'line': 95,
        'file': '\/vendor\/magento\/module-swatches\/Model\/Plugin\/EavAttribute.php',
        'origin': {
          'name': 'beforeSave',
          'className': 'Magento\\Catalog\\Model\\ResourceModel\\Eav\\Attribute',
          'line': 186,
          'file': '\/vendor\/magento\/module-catalog\/Model\/ResourceModel\/Eav\/Attribute.php'
        }
      }],
      'after': [{
        'active': 1,
        'name': 'afterAfterSave',
        'className': 'Magento\\Swatches\\Model\\Plugin\\EavAttribute',
        'line': 112,
        'file': '\/vendor\/magento\/module-swatches\/Model\/Plugin\/EavAttribute.php',
        'origin': {
          'name': 'afterSave',
          'className': 'Magento\\Catalog\\Model\\ResourceModel\\Eav\\Attribute',
          'line': 225,
          'file': '\/vendor\/magento\/module-catalog\/Model\/ResourceModel\/Eav\/Attribute.php'
        }
      }, {
        'active': 1,
        'name': 'afterUsesSource',
        'className': 'Magento\\Swatches\\Model\\Plugin\\EavAttribute',
        'line': 510,
        'file': '\/vendor\/magento\/module-swatches\/Model\/Plugin\/EavAttribute.php',
        'origin': {
          'name': 'usesSource',
          'className': 'Magento\\Catalog\\Model\\ResourceModel\\Eav\\Attribute',
          'line': 663,
          'file': '\/vendor\/magento\/module-catalog\/Model\/ResourceModel\/Eav\/Attribute.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeGetImage',
        'className': 'Magento\\Swatches\\Model\\Plugin\\ProductImage',
        'line': 71,
        'file': '\/vendor\/magento\/module-swatches\/Model\/Plugin\/ProductImage.php',
        'origin': {
          'name': 'getImage',
          'className': 'Magento\\Catalog\\Block\\Product\\AbstractProduct',
          'line': 516,
          'file': '\/vendor\/magento\/module-catalog\/Block\/Product\/AbstractProduct.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterGetMediaAttributes',
        'className': 'Magento\\Swatches\\Model\\Plugin\\Product',
        'line': 20,
        'file': '\/vendor\/magento\/module-swatches\/Model\/Plugin\/Product.php',
        'origin': {
          'name': 'getMediaAttributes',
          'className': 'Magento\\Catalog\\Model\\Product',
          'line': 1542,
          'file': '\/vendor\/magento\/module-catalog\/Model\/Product.php'
        }
      }]
    }, {
      'around': [{
        'active': 1,
        'name': 'aroundRender',
        'className': 'Magento\\Swatches\\Model\\Plugin\\FilterRenderer',
        'line': 50,
        'file': '\/vendor\/magento\/module-swatches\/Model\/Plugin\/FilterRenderer.php',
        'origin': {
          'name': 'render',
          'className': 'Magento\\LayeredNavigation\\Block\\Navigation\\FilterRenderer',
          'line': 26,
          'file': '\/vendor\/magento\/module-layered-navigation\/Block\/Navigation\/FilterRenderer.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterGetUsedProductCollection',
        'className': 'Magento\\Swatches\\Model\\Plugin\\Configurable',
        'line': 44,
        'file': '\/vendor\/magento\/module-swatches\/Model\/Plugin\/Configurable.php',
        'origin': {
          'name': 'getUsedProductCollection',
          'className': 'Magento\\ConfigurableProduct\\Model\\Product\\Type\\Configurable',
          'line': 567,
          'file': '\/vendor\/magento\/module-configurable-product\/Model\/Product\/Type\/Configurable.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeDispatch',
        'className': 'Magento\\Swatches\\Controller\\Adminhtml\\Product\\Attribute\\Plugin\\Save',
        'line': 26,
        'file': '\/vendor\/magento\/module-swatches\/Controller\/Adminhtml\/Product\/Attribute\/Plugin\/Save.php',
        'origin': {
          'name': 'dispatch',
          'className': 'Magento\\Catalog\\Controller\\Adminhtml\\Product\\Attribute\\Save',
          'line': 72,
          'file': '\/vendor\/magento\/module-catalog\/Controller\/Adminhtml\/Product\/Attribute\/Save.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterSave',
        'className': 'Magento\\Swatches\\Plugin\\Catalog\\CacheInvalidate',
        'line': 40,
        'file': '\/vendor\/magento\/module-swatches\/Plugin\/Catalog\/CacheInvalidate.php',
        'origin': {
          'name': 'save',
          'className': 'Magento\\Catalog\\Model\\ResourceModel\\Eav\\Attribute',
          'line': 653,
          'file': '\/vendor\/magento\/module-catalog\/Model\/ResourceModel\/Eav\/Attribute.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterGetVolatileInputTypes',
        'className': 'Magento\\Swatches\\Plugin\\Eav\\System\\Config\\Source\\InputtypePlugin',
        'line': 23,
        'file': '\/vendor\/magento\/module-swatches\/Plugin\/Eav\/System\/Config\/Source\/InputtypePlugin.php',
        'origin': {
          'name': 'getVolatileInputTypes',
          'className': 'Magento\\Eav\\Model\\Adminhtml\\System\\Config\\Source\\Inputtype',
          'line': 41,
          'file': '\/vendor\/magento\/module-eav\/Model\/Adminhtml\/System\/Config\/Source\/Inputtype.php'
        }
      }]
    }],
    'Magento_Tinymce3': [{
      'around': [{
        'active': 1,
        'name': 'aroundGetPlaceholderImageUrl',
        'className': 'Magento\\Tinymce3\\Model\\Plugin\\Widget',
        'line': 54,
        'file': '\/vendor\/magento\/module-tinymce-3\/Model\/Plugin\/Widget.php',
        'origin': {
          'name': 'getPlaceholderImageUrl',
          'className': 'Magento\\Widget\\Model\\Widget',
          'line': 363,
          'file': '\/vendor\/magento\/module-widget\/Model\/Widget.php'
        }
      }]
    }],
    'Magento_AsynchronousOperations': [{
      'after': [{
        'active': 1,
        'name': 'afterToArray',
        'className': 'Magento\\AsynchronousOperations\\Model\\ResourceModel\\System\\Message\\Collection\\Synchronized\\Plugin',
        'line': 85,
        'file': '\/vendor\/magento\/module-asynchronous-operations\/Model\/ResourceModel\/System\/Message\/Collection\/Synchronized\/Plugin.php',
        'origin': {
          'name': 'toArray',
          'className': 'Magento\\AdminNotification\\Model\\ResourceModel\\System\\Message\\Collection\\Synchronized',
          'line': 734,
          'file': '\/vendor\/magento\/module-admin-notification\/Model\/ResourceModel\/System\/Message\/Collection\/Synchronized.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterGetMeta',
        'className': 'Magento\\AsynchronousOperations\\Ui\\Component\\AdminNotification\\Plugin',
        'line': 42,
        'file': '\/vendor\/magento\/module-asynchronous-operations\/Ui\/Component\/AdminNotification\/Plugin.php',
        'origin': {
          'name': 'getMeta',
          'className': 'Magento\\AdminNotification\\Ui\\Component\\DataProvider\\DataProvider',
          'line': 117,
          'file': '\/vendor\/magento\/module-admin-notification\/Ui\/Component\/DataProvider\/DataProvider.php'
        }
      }]
    }],
    'Magento_Usps': [{
      'around': [{
        'active': 1,
        'name': 'aroundIsDisplayGirthValue',
        'className': 'Magento\\Usps\\Block\\Adminhtml\\Order\\Packaging\\Plugin\\DisplayGirth',
        'line': 42,
        'file': '\/vendor\/magento\/module-usps\/Block\/Adminhtml\/Order\/Packaging\/Plugin\/DisplayGirth.php',
        'origin': {
          'name': 'isDisplayGirthValue',
          'className': 'Magento\\Shipping\\Block\\Adminhtml\\Order\\Packaging',
          'line': 334,
          'file': '\/vendor\/magento\/module-shipping\/Block\/Adminhtml\/Order\/Packaging.php'
        }
      }]
    }],
    'Magento_GoogleTagManager': [{
      'after': [{
        'active': 1,
        'name': 'afterSave',
        'className': 'Magento\\GoogleTagManager\\Model\\Plugin\\Config',
        'line': 38,
        'file': '\/vendor\/magento\/module-google-tag-manager\/Model\/Plugin\/Config.php',
        'origin': {
          'name': 'save',
          'className': 'Magento\\Config\\Model\\Config',
          'line': 177,
          'file': '\/vendor\/magento\/module-config\/Model\/Config.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterSave',
        'className': 'Magento\\GoogleTagManager\\Model\\Plugin\\Creditmemo',
        'line': 40,
        'file': '\/vendor\/magento\/module-google-tag-manager\/Model\/Plugin\/Creditmemo.php',
        'origin': {
          'name': 'save',
          'className': 'Magento\\Sales\\Model\\Order\\Creditmemo',
          'line': 653,
          'file': '\/vendor\/magento\/module-sales\/Model\/Order\/Creditmemo.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeToHtml',
        'className': 'Magento\\GoogleTagManager\\Block\\Plugin\\Banner\\Widget\\Banner',
        'line': 36,
        'file': '\/vendor\/magento\/module-google-tag-manager\/Block\/Plugin\/Banner\/Widget\/Banner.php',
        'origin': {
          'name': 'toHtml',
          'className': 'Magento\\Banner\\Block\\Widget\\Banner',
          'line': 661,
          'file': '\/vendor\/magento\/module-banner\/Block\/Widget\/Banner.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterLoad',
        'className': 'Magento\\GoogleTagManager\\Model\\Plugin\\Quote',
        'line': 45,
        'file': '\/vendor\/magento\/module-google-tag-manager\/Model\/Plugin\/Quote.php',
        'origin': {
          'name': 'load',
          'className': 'Magento\\Quote\\Model\\Quote',
          'line': 538,
          'file': '\/vendor\/magento\/module-quote\/Model\/Quote.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterCreateBlock',
        'className': 'Magento\\GoogleTagManager\\Model\\Plugin\\Layout',
        'line': 31,
        'file': '\/vendor\/magento\/module-google-tag-manager\/Model\/Plugin\/Layout.php',
        'origin': {
          'name': 'createBlock',
          'className': 'Magento\\Framework\\View\\Layout',
          'line': 755,
          'file': '\/vendor\/magento\/framework\/View\/Layout.php'
        }
      }]
    }],
    'Magento_VisualMerchandiser': [{
      'before': [{
        'active': 1,
        'name': 'beforeExecute',
        'className': 'Magento\\VisualMerchandiser\\Plugin\\Catalog\\Controller\\Adminhtml\\Category\\EditPlugin',
        'line': 41,
        'file': '\/vendor\/magento\/module-visual-merchandiser\/Plugin\/Catalog\/Controller\/Adminhtml\/Category\/EditPlugin.php',
        'origin': {
          'name': 'execute',
          'className': 'Magento\\Catalog\\Controller\\Adminhtml\\Category\\Edit',
          'line': 51,
          'file': '\/vendor\/magento\/module-catalog\/Controller\/Adminhtml\/Category\/Edit.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeExecute',
        'className': 'Magento\\VisualMerchandiser\\Plugin\\Catalog\\Controller\\Adminhtml\\Category\\AddPlugin',
        'line': 41,
        'file': '\/vendor\/magento\/module-visual-merchandiser\/Plugin\/Catalog\/Controller\/Adminhtml\/Category\/AddPlugin.php',
        'origin': {
          'name': 'execute',
          'className': 'Magento\\Catalog\\Controller\\Adminhtml\\Category\\Add',
          'line': 44,
          'file': '\/vendor\/magento\/module-catalog\/Controller\/Adminhtml\/Category\/Add.php'
        }
      }]
    }],
    'Magento_WebapiAsync': [{
      'after': [{
        'active': 0,
        'name': 'afterGetServicesConfig',
        'className': 'Magento\\WebapiAsync\\Plugin\\ServiceMetadata',
        'line': 76,
        'file': '\/vendor\/magento\/module-webapi-async\/Plugin\/ServiceMetadata.php',
        'origin': {
          'name': 'getServicesConfig',
          'className': 'Magento\\Webapi\\Model\\ServiceMetadata',
          'line': 157,
          'file': '\/vendor\/magento\/module-webapi\/Model\/ServiceMetadata.php'
        }
      }]
    }, {
      'before': [{
        'active': 0,
        'name': 'beforeLoad',
        'className': 'Magento\\WebapiAsync\\Plugin\\Cache\\Webapi',
        'line': 56,
        'file': '\/vendor\/magento\/module-webapi-async\/Plugin\/Cache\/Webapi.php',
        'origin': {
          'name': 'load',
          'className': 'Magento\\Webapi\\Model\\Cache\\Type\\Webapi',
          'line': 63,
          'file': '\/vendor\/magento\/module-webapi\/Model\/Cache\/Type\/Webapi.php'
        }
      }, {
        'active': 0,
        'name': 'beforeSave',
        'className': 'Magento\\WebapiAsync\\Plugin\\Cache\\Webapi',
        'line': 76,
        'file': '\/vendor\/magento\/module-webapi-async\/Plugin\/Cache\/Webapi.php',
        'origin': {
          'name': 'save',
          'className': 'Magento\\Webapi\\Model\\Cache\\Type\\Webapi',
          'line': 49,
          'file': '\/vendor\/magento\/module-webapi\/Model\/Cache\/Type\/Webapi.php'
        }
      }, {
        'active': 0,
        'name': 'beforeRemove',
        'className': 'Magento\\WebapiAsync\\Plugin\\Cache\\Webapi',
        'line': 98,
        'file': '\/vendor\/magento\/module-webapi-async\/Plugin\/Cache\/Webapi.php',
        'origin': {
          'name': 'remove',
          'className': 'Magento\\Webapi\\Model\\Cache\\Type\\Webapi',
          'line': 81,
          'file': '\/vendor\/magento\/module-webapi\/Model\/Cache\/Type\/Webapi.php'
        }
      }]
    }, {
      'before': [{
        'active': 0,
        'name': 'beforeDispatch',
        'className': 'Magento\\WebapiAsync\\Plugin\\ControllerRest',
        'line': 49,
        'file': '\/vendor\/magento\/module-webapi-async\/Plugin\/ControllerRest.php',
        'origin': {
          'name': 'dispatch',
          'className': 'Magento\\Webapi\\Controller\\Rest',
          'line': 180,
          'file': '\/vendor\/magento\/module-webapi\/Controller\/Rest.php'
        }
      }]
    }],
    'Magento_WebapiSecurity': [{
      'after': [{
        'active': 1,
        'name': 'afterConvert',
        'className': 'Magento\\WebapiSecurity\\Model\\Plugin\\AnonymousResourceSecurity',
        'line': 47,
        'file': '\/vendor\/magento\/module-webapi-security\/Model\/Plugin\/AnonymousResourceSecurity.php',
        'origin': {
          'name': 'convert',
          'className': 'Magento\\Webapi\\Model\\Config\\Converter',
          'line': 39,
          'file': '\/vendor\/magento\/module-webapi\/Model\/Config\/Converter.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterAfterSave',
        'className': 'Magento\\WebapiSecurity\\Model\\Plugin\\CacheInvalidator',
        'line': 33,
        'file': '\/vendor\/magento\/module-webapi-security\/Model\/Plugin\/CacheInvalidator.php',
        'origin': {
          'name': 'afterSave',
          'className': 'Magento\\Framework\\App\\Config\\Value',
          'line': 123,
          'file': '\/vendor\/magento\/framework\/App\/Config\/Value.php'
        }
      }]
    }],
    'Magento_ElasticsearchCatalogPermissions': [{
      'before': [{
        'active': 1,
        'name': 'beforeLoad',
        'className': 'Magento\\ElasticsearchCatalogPermissions\\Plugin\\AddCategoryPermissionsToCollection',
        'line': 90,
        'file': '\/vendor\/magento\/module-elasticsearch-catalog-permissions\/Plugin\/AddCategoryPermissionsToCollection.php',
        'origin': {
          'name': 'load',
          'className': 'Magento\\CatalogSearch\\Model\\ResourceModel\\Fulltext\\Collection',
          'line': 816,
          'file': '\/vendor\/magento\/module-catalog-search\/Model\/ResourceModel\/Fulltext\/Collection.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeLoad',
        'className': 'Magento\\ElasticsearchCatalogPermissions\\Plugin\\AddCategoryPermissionsToCollection',
        'line': 90,
        'file': '\/vendor\/magento\/module-elasticsearch-catalog-permissions\/Plugin\/AddCategoryPermissionsToCollection.php',
        'origin': {
          'name': 'load',
          'className': 'Magento\\CatalogSearch\\Model\\ResourceModel\\Advanced\\Collection',
          'line': 816,
          'file': '\/vendor\/magento\/module-catalog-search\/Model\/ResourceModel\/Advanced\/Collection.php'
        }
      }]
    }],
    'Amazon_Core': [{
      'after': [{
        'active': 0,
        'name': 'afterGetSectionData',
        'className': 'Amazon\\Core\\Plugin\\CartSection',
        'line': 53,
        'file': '\/vendor\/amzn\/amazon-pay-and-login-with-amazon-core-module\/Plugin\/CartSection.php',
        'origin': {
          'name': 'getSectionData',
          'className': 'Magento\\Checkout\\CustomerData\\Cart',
          'line': 89,
          'file': '\/vendor\/magento\/module-checkout\/CustomerData\/Cart.php'
        }
      }]
    }],
    'Amazon_Login': [{
      'after': [{
        'active': 0,
        'name': 'afterGetById',
        'className': 'Amazon\\Login\\Plugin\\CustomerRepository',
        'line': 58,
        'file': '\/vendor\/amzn\/login-with-amazon-module\/Plugin\/CustomerRepository.php',
        'origin': {
          'name': 'getById',
          'className': 'Magento\\Customer\\Api\\CustomerRepositoryInterface',
          'line': 48,
          'file': '\/vendor\/magento\/module-customer\/Api\/CustomerRepositoryInterface.php'
        }
      }, {
        'active': 0,
        'name': 'afterGet',
        'className': 'Amazon\\Login\\Plugin\\CustomerRepository',
        'line': 76,
        'file': '\/vendor\/amzn\/login-with-amazon-module\/Plugin\/CustomerRepository.php',
        'origin': {
          'name': 'get',
          'className': 'Magento\\Customer\\Api\\CustomerRepositoryInterface',
          'line': 38,
          'file': '\/vendor\/magento\/module-customer\/Api\/CustomerRepositoryInterface.php'
        }
      }]
    }, {
      'around': [{
        'active': 0,
        'name': 'aroundAddAttributeToFilter',
        'className': 'Amazon\\Login\\Plugin\\CustomerCollection',
        'line': 51,
        'file': '\/vendor\/amzn\/login-with-amazon-module\/Plugin\/CustomerCollection.php',
        'origin': {
          'name': 'addAttributeToFilter',
          'className': 'Magento\\Customer\\Model\\ResourceModel\\Customer\\Collection',
          'line': 351,
          'file': '\/vendor\/magento\/module-customer\/Model\/ResourceModel\/Customer\/Collection.php'
        }
      }]
    }, {
      'after': [{
        'active': 0,
        'name': 'afterExecute',
        'className': 'Amazon\\Login\\Plugin\\CartController',
        'line': 44,
        'file': '\/vendor\/amzn\/login-with-amazon-module\/Plugin\/CartController.php',
        'origin': {
          'name': 'execute',
          'className': 'Magento\\Checkout\\Controller\\Cart\\Index',
          'line': 54,
          'file': '\/vendor\/magento\/module-checkout\/Controller\/Cart\/Index.php'
        }
      }]
    }, {
      'after': [{
        'active': 0,
        'name': 'afterExecute',
        'className': 'Amazon\\Login\\Plugin\\CheckoutController',
        'line': 44,
        'file': '\/vendor\/amzn\/login-with-amazon-module\/Plugin\/CheckoutController.php',
        'origin': {
          'name': 'execute',
          'className': 'Magento\\Checkout\\Controller\\Index\\Index',
          'line': 21,
          'file': '\/vendor\/magento\/module-checkout\/Controller\/Index\/Index.php'
        }
      }]
    }, {
      'after': [{
        'active': 0,
        'name': 'afterExecute',
        'className': 'Amazon\\Login\\Plugin\\LoginController',
        'line': 44,
        'file': '\/vendor\/amzn\/login-with-amazon-module\/Plugin\/LoginController.php',
        'origin': {
          'name': 'execute',
          'className': 'Magento\\Customer\\Controller\\Account\\Login',
          'line': 51,
          'file': '\/vendor\/magento\/module-customer\/Controller\/Account\/Login.php'
        }
      }]
    }, {
      'after': [{
        'active': 0,
        'name': 'afterExecute',
        'className': 'Amazon\\Login\\Plugin\\CreateController',
        'line': 44,
        'file': '\/vendor\/amzn\/login-with-amazon-module\/Plugin\/CreateController.php',
        'origin': {
          'name': 'execute',
          'className': 'Magento\\Customer\\Controller\\Account\\Create',
          'line': 55,
          'file': '\/vendor\/magento\/module-customer\/Controller\/Account\/Create.php'
        }
      }]
    }, {
      'after': [{
        'active': 0,
        'name': 'afterCreate',
        'className': 'Amazon\\Login\\Plugin\\OrderCustomerManagement',
        'line': 73,
        'file': '\/vendor\/amzn\/login-with-amazon-module\/Plugin\/OrderCustomerManagement.php',
        'origin': {
          'name': 'create',
          'className': 'Magento\\Sales\\Api\\OrderCustomerManagementInterface',
          'line': 22,
          'file': '\/vendor\/magento\/module-sales\/Api\/OrderCustomerManagementInterface.php'
        }
      }]
    }],
    'Amazon_Payment': [{
      'after': [{
        'active': 0,
        'name': 'afterGet',
        'className': 'Amazon\\Payment\\Plugin\\QuoteRepository',
        'line': 46,
        'file': '\/vendor\/amzn\/amazon-pay-module\/Plugin\/QuoteRepository.php',
        'origin': {
          'name': 'get',
          'className': 'Magento\\Quote\\Api\\CartRepositoryInterface',
          'line': 22,
          'file': '\/vendor\/magento\/module-quote\/Api\/CartRepositoryInterface.php'
        }
      }, {
        'active': 0,
        'name': 'afterGetForCustomer',
        'className': 'Amazon\\Payment\\Plugin\\QuoteRepository',
        'line': 58,
        'file': '\/vendor\/amzn\/amazon-pay-module\/Plugin\/QuoteRepository.php',
        'origin': {
          'name': 'getForCustomer',
          'className': 'Magento\\Quote\\Api\\CartRepositoryInterface',
          'line': 44,
          'file': '\/vendor\/magento\/module-quote\/Api\/CartRepositoryInterface.php'
        }
      }, {
        'active': 0,
        'name': 'afterGetActive',
        'className': 'Amazon\\Payment\\Plugin\\QuoteRepository',
        'line': 70,
        'file': '\/vendor\/amzn\/amazon-pay-module\/Plugin\/QuoteRepository.php',
        'origin': {
          'name': 'getActive',
          'className': 'Magento\\Quote\\Api\\CartRepositoryInterface',
          'line': 54,
          'file': '\/vendor\/magento\/module-quote\/Api\/CartRepositoryInterface.php'
        }
      }, {
        'active': 0,
        'name': 'afterGetActiveForCustomer',
        'className': 'Amazon\\Payment\\Plugin\\QuoteRepository',
        'line': 82,
        'file': '\/vendor\/amzn\/amazon-pay-module\/Plugin\/QuoteRepository.php',
        'origin': {
          'name': 'getActiveForCustomer',
          'className': 'Magento\\Quote\\Api\\CartRepositoryInterface',
          'line': 64,
          'file': '\/vendor\/magento\/module-quote\/Api\/CartRepositoryInterface.php'
        }
      }]
    }, {
      'before': [{
        'active': 0,
        'name': 'beforeSaveAddressInformation',
        'className': 'Amazon\\Payment\\Plugin\\ShippingInformationManagement',
        'line': 63,
        'file': '\/vendor\/amzn\/amazon-pay-module\/Plugin\/ShippingInformationManagement.php',
        'origin': {
          'name': 'saveAddressInformation',
          'className': 'Magento\\Checkout\\Api\\ShippingInformationManagementInterface',
          'line': 20,
          'file': '\/vendor\/magento\/module-checkout\/Api\/ShippingInformationManagementInterface.php'
        }
      }]
    }, {
      'after': [{
        'active': 0,
        'name': 'afterGetAdditionalInformation',
        'className': 'Amazon\\Payment\\Plugin\\AdditionalInformation',
        'line': 28,
        'file': '\/vendor\/amzn\/amazon-pay-module\/Plugin\/AdditionalInformation.php',
        'origin': []
      }]
    }, {
      'after': [{
        'active': 0,
        'name': 'afterIsAvailable',
        'className': 'Amazon\\Payment\\Plugin\\DisableAmazonPaymentMethod',
        'line': 39,
        'file': '\/vendor\/amzn\/amazon-pay-module\/Plugin\/DisableAmazonPaymentMethod.php',
        'origin': {
          'name': 'isAvailable',
          'className': 'Amazon\\Payment\\Model\\Method\\AmazonLoginMethod',
          'line': 838,
          'file': '\/vendor\/amzn\/amazon-pay-module\/Model\/Method\/AmazonLoginMethod.php'
        }
      }]
    }, {
      'after': [{
        'active': 0,
        'name': 'afterSet',
        'className': 'Amazon\\Payment\\Plugin\\ConfirmOrderReference',
        'line': 80,
        'file': '\/vendor\/amzn\/amazon-pay-module\/Plugin\/ConfirmOrderReference.php',
        'origin': {
          'name': 'set',
          'className': 'Magento\\Quote\\Model\\PaymentMethodManagement',
          'line': 52,
          'file': '\/vendor\/magento\/module-quote\/Model\/PaymentMethodManagement.php'
        }
      }]
    }, {
      'before': [{
        'active': 0,
        'name': 'beforeMaskException',
        'className': 'Amazon\\Payment\\Plugin\\WebapiErrorProcessor',
        'line': 26,
        'file': '\/vendor\/amzn\/amazon-pay-module\/Plugin\/WebapiErrorProcessor.php',
        'origin': {
          'name': 'maskException',
          'className': 'Magento\\Framework\\Webapi\\ErrorProcessor',
          'line': 112,
          'file': '\/vendor\/magento\/framework\/Webapi\/ErrorProcessor.php'
        }
      }]
    }, {
      'after': [{
        'active': 0,
        'name': 'afterProcess',
        'className': 'Amazon\\Payment\\Plugin\\CheckoutProcessor',
        'line': 55,
        'file': '\/vendor\/amzn\/amazon-pay-module\/Plugin\/CheckoutProcessor.php',
        'origin': {
          'name': 'process',
          'className': 'Magento\\Checkout\\Block\\Checkout\\LayoutProcessor',
          'line': 150,
          'file': '\/vendor\/magento\/module-checkout\/Block\/Checkout\/LayoutProcessor.php'
        }
      }]
    }],
    'Dotdigitalgroup_Email': [{
      'after': [{
        'active': 1,
        'name': 'afterCreate',
        'className': 'Dotdigitalgroup\\Email\\Plugin\\CustomerManagementPlugin',
        'line': 34,
        'file': '\/vendor\/dotmailer\/dotmailer-magento2-extension\/Plugin\/CustomerManagementPlugin.php',
        'origin': {
          'name': 'create',
          'className': 'Magento\\Sales\\Api\\OrderCustomerManagementInterface',
          'line': 22,
          'file': '\/vendor\/magento\/module-sales\/Api\/OrderCustomerManagementInterface.php'
        }
      }]
    }, {
      'around': [{
        'active': 1,
        'name': 'aroundSendConfirmationSuccessEmail',
        'className': 'Dotdigitalgroup\\Email\\Plugin\\SubscriberPlugin',
        'line': 31,
        'file': '\/vendor\/dotmailer\/dotmailer-magento2-extension\/Plugin\/SubscriberPlugin.php',
        'origin': {
          'name': 'sendConfirmationSuccessEmail',
          'className': 'Magento\\Newsletter\\Model\\Subscriber',
          'line': 765,
          'file': '\/vendor\/magento\/module-newsletter\/Model\/Subscriber.php'
        }
      }]
    }, {
      'around': [{
        'active': 1,
        'name': 'aroundSendNewAccountEmail',
        'className': 'Dotdigitalgroup\\Email\\Plugin\\CustomerPlugin',
        'line': 34,
        'file': '\/vendor\/dotmailer\/dotmailer-magento2-extension\/Plugin\/CustomerPlugin.php',
        'origin': {
          'name': 'sendNewAccountEmail',
          'className': 'Magento\\Customer\\Model\\Customer',
          'line': 767,
          'file': '\/vendor\/magento\/module-customer\/Model\/Customer.php'
        }
      }]
    }, {
      'around': [{
        'active': 1,
        'name': 'aroundNewAccount',
        'className': 'Dotdigitalgroup\\Email\\Plugin\\CustomerEmailNotificationPlugin',
        'line': 45,
        'file': '\/vendor\/dotmailer\/dotmailer-magento2-extension\/Plugin\/CustomerEmailNotificationPlugin.php',
        'origin': {
          'name': 'newAccount',
          'className': 'Magento\\Customer\\Model\\EmailNotificationInterface',
          'line': 82,
          'file': '\/vendor\/magento\/module-customer\/Model\/EmailNotificationInterface.php'
        }
      }]
    }, {
      'around': [{
        'active': 1,
        'name': 'aroundSendMessage',
        'className': 'Dotdigitalgroup\\Email\\Plugin\\TransportPlugin',
        'line': 61,
        'file': '\/vendor\/dotmailer\/dotmailer-magento2-extension\/Plugin\/TransportPlugin.php',
        'origin': {
          'name': 'sendMessage',
          'className': 'Magento\\Framework\\Mail\\TransportInterface',
          'line': 22,
          'file': '\/vendor\/magento\/framework\/Mail\/TransportInterface.php'
        }
      }]
    }, {
      'around': [{
        'active': 1,
        'name': 'aroundAddViewsCount',
        'className': 'Dotdigitalgroup\\Email\\Plugin\\ReportsProductCollectionPlugin',
        'line': 35,
        'file': '\/vendor\/dotmailer\/dotmailer-magento2-extension\/Plugin\/ReportsProductCollectionPlugin.php',
        'origin': {
          'name': 'addViewsCount',
          'className': 'Magento\\Reports\\Model\\ResourceModel\\Product\\Collection',
          'line': 332,
          'file': '\/vendor\/magento\/module-reports\/Model\/ResourceModel\/Product\/Collection.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeSetTemplateOptions',
        'className': 'Dotdigitalgroup\\Email\\Plugin\\TransportBuilderPlugin',
        'line': 36,
        'file': '\/vendor\/dotmailer\/dotmailer-magento2-extension\/Plugin\/TransportBuilderPlugin.php',
        'origin': {
          'name': 'setTemplateOptions',
          'className': 'Magento\\Framework\\Mail\\Template\\TransportBuilder',
          'line': 321,
          'file': '\/vendor\/magento\/framework\/Mail\/Template\/TransportBuilder.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterGetData',
        'className': 'Dotdigitalgroup\\Email\\Plugin\\TemplatePlugin',
        'line': 48,
        'file': '\/vendor\/dotmailer\/dotmailer-magento2-extension\/Plugin\/TemplatePlugin.php',
        'origin': {
          'name': 'getData',
          'className': 'Magento\\Email\\Model\\Template',
          'line': 119,
          'file': '\/vendor\/magento\/module-email\/Model\/Template.php'
        }
      }, {
        'active': 1,
        'name': 'afterBeforeSave',
        'className': 'Dotdigitalgroup\\Email\\Plugin\\TemplatePlugin',
        'line': 171,
        'file': '\/vendor\/dotmailer\/dotmailer-magento2-extension\/Plugin\/TemplatePlugin.php',
        'origin': {
          'name': 'beforeSave',
          'className': 'Magento\\Email\\Model\\Template',
          'line': 349,
          'file': '\/vendor\/magento\/module-email\/Model\/Template.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeSetBody',
        'className': 'Dotdigitalgroup\\Email\\Plugin\\MessagePlugin',
        'line': 61,
        'file': '\/vendor\/dotmailer\/dotmailer-magento2-extension\/Plugin\/MessagePlugin.php',
        'origin': {
          'name': 'setBody',
          'className': 'Magento\\Framework\\Mail\\MessageInterface',
          'line': 54,
          'file': '\/vendor\/magento\/framework\/Mail\/MessageInterface.php'
        }
      }]
    }, {
      'around': [{
        'active': 1,
        'name': 'aroundExecute',
        'className': 'Dotdigitalgroup\\Email\\Plugin\\NewsletterManageIndexPlugin',
        'line': 48,
        'file': '\/vendor\/dotmailer\/dotmailer-magento2-extension\/Plugin\/NewsletterManageIndexPlugin.php',
        'origin': {
          'name': 'execute',
          'className': 'Magento\\Newsletter\\Controller\\Manage\\Index',
          'line': 16,
          'file': '\/vendor\/magento\/module-newsletter\/Controller\/Manage\/Index.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterExecute',
        'className': 'Dotdigitalgroup\\Email\\Plugin\\UrlRewriteSavePlugin',
        'line': 36,
        'file': '\/vendor\/dotmailer\/dotmailer-magento2-extension\/Plugin\/UrlRewriteSavePlugin.php',
        'origin': {
          'name': 'execute',
          'className': 'Magento\\UrlRewrite\\Controller\\Adminhtml\\Url\\Rewrite\\Save',
          'line': 147,
          'file': '\/vendor\/magento\/module-url-rewrite\/Controller\/Adminhtml\/Url\/Rewrite\/Save.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterExecute',
        'className': 'Dotdigitalgroup\\Email\\Plugin\\CatalogProductAttributeSavePlugin',
        'line': 36,
        'file': '\/vendor\/dotmailer\/dotmailer-magento2-extension\/Plugin\/CatalogProductAttributeSavePlugin.php',
        'origin': {
          'name': 'execute',
          'className': 'Magento\\Catalog\\Controller\\Adminhtml\\Product\\Action\\Attribute\\Save',
          'line': 84,
          'file': '\/vendor\/magento\/module-catalog\/Controller\/Adminhtml\/Product\/Action\/Attribute\/Save.php'
        }
      }]
    }, {
      'around': [{
        'active': 1,
        'name': 'aroundGetExcludes',
        'className': 'Dotdigitalgroup\\Email\\Plugin\\MinificationPlugin',
        'line': 21,
        'file': '\/vendor\/dotmailer\/dotmailer-magento2-extension\/Plugin\/MinificationPlugin.php',
        'origin': {
          'name': 'getExcludes',
          'className': 'Magento\\Framework\\View\\Asset\\Minification',
          'line': 148,
          'file': '\/vendor\/magento\/framework\/View\/Asset\/Minification.php'
        }
      }]
    }],
    'Dotdigitalgroup_Enterprise': [{
      'before': [{
        'active': 1,
        'name': 'beforeSetContactData',
        'className': 'Dotdigitalgroup\\Enterprise\\Plugin\\CustomerPlugin',
        'line': 74,
        'file': '\/vendor\/dotmailer\/dotmailer-magento2-extension-enterprise\/Plugin\/CustomerPlugin.php',
        'origin': {
          'name': 'setContactData',
          'className': 'Dotdigitalgroup\\Email\\Model\\Apiconnector\\Customer',
          'line': 142,
          'file': '\/vendor\/dotmailer\/dotmailer-magento2-extension\/Model\/Apiconnector\/Customer.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterGetWebsiteCustomerMappingDatafields',
        'className': 'Dotdigitalgroup\\Enterprise\\Plugin\\HelperPlugin',
        'line': 31,
        'file': '\/vendor\/dotmailer\/dotmailer-magento2-extension-enterprise\/Plugin\/HelperPlugin.php',
        'origin': {
          'name': 'getWebsiteCustomerMappingDatafields',
          'className': 'Dotdigitalgroup\\Email\\Helper\\Data',
          'line': 1362,
          'file': '\/vendor\/dotmailer\/dotmailer-magento2-extension\/Helper\/Data.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterGetExtraDataFields',
        'className': 'Dotdigitalgroup\\Enterprise\\Plugin\\DataFieldPlugin',
        'line': 31,
        'file': '\/vendor\/dotmailer\/dotmailer-magento2-extension-enterprise\/Plugin\/DataFieldPlugin.php',
        'origin': {
          'name': 'getExtraDataFields',
          'className': 'Dotdigitalgroup\\Email\\Model\\Connector\\Datafield',
          'line': 356,
          'file': '\/vendor\/dotmailer\/dotmailer-magento2-extension\/Model\/Connector\/Datafield.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeDeleteSegmentCustomers',
        'className': 'Dotdigitalgroup\\Enterprise\\Plugin\\SegmentPlugin',
        'line': 40,
        'file': '\/vendor\/dotmailer\/dotmailer-magento2-extension-enterprise\/Plugin\/SegmentPlugin.php',
        'origin': {
          'name': 'deleteSegmentCustomers',
          'className': 'Magento\\CustomerSegment\\Model\\ResourceModel\\Segment',
          'line': 156,
          'file': '\/vendor\/magento\/module-customer-segment\/Model\/ResourceModel\/Segment.php'
        }
      }],
      'after': [{
        'active': 1,
        'name': 'afterSaveCustomersFromSelect',
        'className': 'Dotdigitalgroup\\Enterprise\\Plugin\\SegmentPlugin',
        'line': 57,
        'file': '\/vendor\/dotmailer\/dotmailer-magento2-extension-enterprise\/Plugin\/SegmentPlugin.php',
        'origin': {
          'name': 'saveCustomersFromSelect',
          'className': 'Magento\\CustomerSegment\\Model\\ResourceModel\\Segment',
          'line': 173,
          'file': '\/vendor\/magento\/module-customer-segment\/Model\/ResourceModel\/Segment.php'
        }
      }],
      'around': [{
        'active': 1,
        'name': 'aroundAggregateMatchedCustomers',
        'className': 'Dotdigitalgroup\\Enterprise\\Plugin\\SegmentPlugin',
        'line': 84,
        'file': '\/vendor\/dotmailer\/dotmailer-magento2-extension-enterprise\/Plugin\/SegmentPlugin.php',
        'origin': {
          'name': 'aggregateMatchedCustomers',
          'className': 'Magento\\CustomerSegment\\Model\\ResourceModel\\Segment',
          'line': 239,
          'file': '\/vendor\/magento\/module-customer-segment\/Model\/ResourceModel\/Segment.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeDelete',
        'className': 'Magento\\Framework\\ForeignKey\\ObjectRelationProcessor\\Plugin',
        'line': 61,
        'file': '\/vendor\/magento\/framework-foreign-key\/ObjectRelationProcessor\/Plugin.php',
        'origin': {
          'name': 'delete',
          'className': 'Magento\\Framework\\Model\\ResourceModel\\Db\\ObjectRelationProcessor',
          'line': 29,
          'file': '\/vendor\/magento\/framework\/Model\/ResourceModel\/Db\/ObjectRelationProcessor.php'
        }
      }, {
        'active': 1,
        'name': 'beforeValidateDataIntegrity',
        'className': 'Magento\\Framework\\ForeignKey\\ObjectRelationProcessor\\Plugin',
        'line': 94,
        'file': '\/vendor\/magento\/framework-foreign-key\/ObjectRelationProcessor\/Plugin.php',
        'origin': {
          'name': 'validateDataIntegrity',
          'className': 'Magento\\Framework\\Model\\ResourceModel\\Db\\ObjectRelationProcessor',
          'line': 47,
          'file': '\/vendor\/magento\/framework\/Model\/ResourceModel\/Db\/ObjectRelationProcessor.php'
        }
      }]
    }],
    'Ebizmarts_MailChimp': [{
      'before': [{
        'active': 1,
        'name': 'beforeBeforeSave',
        'className': 'Ebizmarts\\MailChimp\\Model\\Plugin\\Quote',
        'line': 40,
        'file': '\/vendor\/mailchimp\/mc-magento2\/Model\/Plugin\/Quote.php',
        'origin': {
          'name': 'beforeSave',
          'className': 'Magento\\Quote\\Model\\Quote',
          'line': 815,
          'file': '\/vendor\/magento\/module-quote\/Model\/Quote.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterExecute',
        'className': 'Ebizmarts\\MailChimp\\Model\\Plugin\\Newsletter\\Save',
        'line': 61,
        'file': '\/vendor\/mailchimp\/mc-magento2\/Model\/Plugin\/Newsletter\/Save.php',
        'origin': {
          'name': 'execute',
          'className': 'Magento\\Newsletter\\Controller\\Manage\\Save',
          'line': 71,
          'file': '\/vendor\/magento\/module-newsletter\/Controller\/Manage\/Save.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeUnsubscribeCustomerById',
        'className': 'Ebizmarts\\MailChimp\\Model\\Plugin\\Subscriber',
        'line': 65,
        'file': '\/vendor\/mailchimp\/mc-magento2\/Model\/Plugin\/Subscriber.php',
        'origin': {
          'name': 'unsubscribeCustomerById',
          'className': 'Magento\\Newsletter\\Model\\Subscriber',
          'line': 543,
          'file': '\/vendor\/magento\/module-newsletter\/Model\/Subscriber.php'
        }
      }, {
        'active': 1,
        'name': 'beforeSubscribeCustomerById',
        'className': 'Ebizmarts\\MailChimp\\Model\\Plugin\\Subscriber',
        'line': 100,
        'file': '\/vendor\/mailchimp\/mc-magento2\/Model\/Plugin\/Subscriber.php',
        'origin': {
          'name': 'subscribeCustomerById',
          'className': 'Magento\\Newsletter\\Model\\Subscriber',
          'line': 532,
          'file': '\/vendor\/magento\/module-newsletter\/Model\/Subscriber.php'
        }
      }, {
        'active': 1,
        'name': 'beforeSubscribe',
        'className': 'Ebizmarts\\MailChimp\\Model\\Plugin\\Subscriber',
        'line': 153,
        'file': '\/vendor\/mailchimp\/mc-magento2\/Model\/Plugin\/Subscriber.php',
        'origin': {
          'name': 'subscribe',
          'className': 'Magento\\Newsletter\\Model\\Subscriber',
          'line': 442,
          'file': '\/vendor\/magento\/module-newsletter\/Model\/Subscriber.php'
        }
      }, {
        'active': 1,
        'name': 'beforeUnsubscribe',
        'className': 'Ebizmarts\\MailChimp\\Model\\Plugin\\Subscriber',
        'line': 201,
        'file': '\/vendor\/mailchimp\/mc-magento2\/Model\/Plugin\/Subscriber.php',
        'origin': {
          'name': 'unsubscribe',
          'className': 'Magento\\Newsletter\\Model\\Subscriber',
          'line': 511,
          'file': '\/vendor\/magento\/module-newsletter\/Model\/Subscriber.php'
        }
      }],
      'after': [{
        'active': 1,
        'name': 'afterDelete',
        'className': 'Ebizmarts\\MailChimp\\Model\\Plugin\\Subscriber',
        'line': 228,
        'file': '\/vendor\/mailchimp\/mc-magento2\/Model\/Plugin\/Subscriber.php',
        'origin': {
          'name': 'delete',
          'className': 'Magento\\Newsletter\\Model\\Subscriber',
          'line': 843,
          'file': '\/vendor\/magento\/module-newsletter\/Model\/Subscriber.php'
        }
      }]
    }, {
      'around': [{
        'active': 1,
        'name': 'aroundIsEmailAvailable',
        'className': 'Ebizmarts\\MailChimp\\Model\\Plugin\\AccountManagement',
        'line': 61,
        'file': '\/vendor\/mailchimp\/mc-magento2\/Model\/Plugin\/AccountManagement.php',
        'origin': {
          'name': 'isEmailAvailable',
          'className': 'Magento\\Customer\\Model\\AccountManagement',
          'line': 1094,
          'file': '\/vendor\/magento\/module-customer\/Model\/AccountManagement.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterAfterDelete',
        'className': 'Ebizmarts\\MailChimp\\Model\\Plugin\\Coupon',
        'line': 30,
        'file': '\/vendor\/mailchimp\/mc-magento2\/Model\/Plugin\/Coupon.php',
        'origin': {
          'name': 'afterDelete',
          'className': 'Magento\\SalesRule\\Model\\Coupon',
          'line': 874,
          'file': '\/vendor\/magento\/module-sales-rule\/Model\/Coupon.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterSave',
        'className': 'Ebizmarts\\MailChimp\\Model\\Plugin\\Ship',
        'line': 33,
        'file': '\/vendor\/mailchimp\/mc-magento2\/Model\/Plugin\/Ship.php',
        'origin': {
          'name': 'save',
          'className': 'Magento\\Sales\\Model\\Order\\ShipmentRepository',
          'line': 144,
          'file': '\/vendor\/magento\/module-sales\/Model\/Order\/ShipmentRepository.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterSave',
        'className': 'Ebizmarts\\MailChimp\\Model\\Plugin\\Invoice',
        'line': 33,
        'file': '\/vendor\/mailchimp\/mc-magento2\/Model\/Plugin\/Invoice.php',
        'origin': {
          'name': 'save',
          'className': 'Magento\\Sales\\Model\\Order\\InvoiceRepository',
          'line': 138,
          'file': '\/vendor\/magento\/module-sales\/Model\/Order\/InvoiceRepository.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterSave',
        'className': 'Ebizmarts\\MailChimp\\Model\\Plugin\\Creditmemo',
        'line': 33,
        'file': '\/vendor\/mailchimp\/mc-magento2\/Model\/Plugin\/Creditmemo.php',
        'origin': {
          'name': 'save',
          'className': 'Magento\\Sales\\Model\\Order\\CreditmemoRepository',
          'line': 138,
          'file': '\/vendor\/magento\/module-sales\/Model\/Order\/CreditmemoRepository.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeBeforeSave',
        'className': 'Ebizmarts\\MailChimp\\Model\\Plugin\\Quote',
        'line': 40,
        'file': '\/vendor\/mailchimp\/mc-magento2\/Model\/Plugin\/Quote.php',
        'origin': {
          'name': 'beforeSave',
          'className': 'Magento\\Quote\\Model\\Quote',
          'line': 815,
          'file': '\/vendor\/magento\/module-quote\/Model\/Quote.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterExecute',
        'className': 'Ebizmarts\\MailChimp\\Model\\Plugin\\Newsletter\\Save',
        'line': 61,
        'file': '\/vendor\/mailchimp\/mc-magento2\/Model\/Plugin\/Newsletter\/Save.php',
        'origin': {
          'name': 'execute',
          'className': 'Magento\\Newsletter\\Controller\\Manage\\Save',
          'line': 71,
          'file': '\/vendor\/magento\/module-newsletter\/Controller\/Manage\/Save.php'
        }
      }]
    }],
    'Ecomteck_Core': [{
      'before': [{
        'active': 1,
        'name': 'beforeMerge',
        'className': 'Ecomteck\\Core\\Model\\Config\\Structure\\Data',
        'line': 107,
        'file': '\/app\/code\/Ecomteck\/Core\/Model\/Config\/Structure\/Data.php',
        'origin': {
          'name': 'merge',
          'className': 'Magento\\Config\\Model\\Config\\Structure\\Data',
          'line': 42,
          'file': '\/vendor\/magento\/module-config\/Model\/Config\/Structure\/Data.php'
        }
      }]
    }],
    'Ecomteck_OrderCustomAttributes': [{
      'after': [{
        'active': 1,
        'name': 'afterToHtml',
        'className': 'Ecomteck\\OrderCustomAttributes\\Plugin\\Order\\SalesOrderViewInfo',
        'line': 30,
        'file': '\/app\/code\/Ecomteck\/OrderCustomAttributes\/Plugin\/Order\/SalesOrderViewInfo.php',
        'origin': {
          'name': 'toHtml',
          'className': 'Magento\\Sales\\Block\\Order\\Info',
          'line': 661,
          'file': '\/vendor\/magento\/module-sales\/Block\/Order\/Info.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterToHtml',
        'className': 'Ecomteck\\OrderCustomAttributes\\Plugin\\Block\\Adminhtml\\SalesOrderViewInfo',
        'line': 31,
        'file': '\/app\/code\/Ecomteck\/OrderCustomAttributes\/Plugin\/Block\/Adminhtml\/SalesOrderViewInfo.php',
        'origin': {
          'name': 'toHtml',
          'className': 'Magento\\Sales\\Block\\Adminhtml\\Order\\View\\Info',
          'line': 661,
          'file': '\/vendor\/magento\/module-sales\/Block\/Adminhtml\/Order\/View\/Info.php'
        }
      }]
    }],
    'Frobou_CategoryFilter': [{
      'after': [{
        'active': 1,
        'name': 'afterGetAttributeUsedForSortByArray',
        'className': 'Frobou\\CategoryFilter\\Plugin\\Model\\Config',
        'line': 29,
        'file': '\/app\/code\/Frobou\/CategoryFilter\/Plugin\/Model\/Config.php',
        'origin': {
          'name': 'getAttributeUsedForSortByArray',
          'className': 'Magento\\Catalog\\Model\\Config',
          'line': 474,
          'file': '\/vendor\/magento\/module-catalog\/Model\/Config.php'
        }
      }]
    }, {
      'around': [{
        'active': 1,
        'name': 'aroundSetCollection',
        'className': 'Frobou\\CategoryFilter\\Plugin\\Product\\ProductList\\Toolbar',
        'line': 35,
        'file': '\/app\/code\/Frobou\/CategoryFilter\/Plugin\/Product\/ProductList\/Toolbar.php',
        'origin': {
          'name': 'setCollection',
          'className': 'Magento\\Catalog\\Block\\Product\\ProductList\\Toolbar',
          'line': 221,
          'file': '\/vendor\/magento\/module-catalog\/Block\/Product\/ProductList\/Toolbar.php'
        }
      }]
    }],
    'Olivas_Quote': [{
      'after': [{
        'active': 1,
        'name': 'afterGetGroupedAllShippingRates',
        'className': 'Olivas\\Quote\\Plugin\\Magento\\Quote\\Model\\Quote',
        'line': 35,
        'file': '\/app\/code\/Olivas\/Quote\/Plugin\/Magento\/Quote\/Model\/Quote.php',
        'origin': {
          'name': 'getGroupedAllShippingRates',
          'className': 'Magento\\Quote\\Model\\Quote\\Address',
          'line': 846,
          'file': '\/vendor\/magento\/module-quote\/Model\/Quote\/Address.php'
        }
      }]
    }],
    'Moip_Magento2': [{
      'around': [{
        'active': 1,
        'name': 'aroundSaveTokenWithPaymentLink',
        'className': 'Moip\\Magento2\\Plugin\\PaymentToken',
        'line': 22,
        'file': '\/vendor\/moip\/magento2\/Plugin\/PaymentToken.php',
        'origin': {
          'name': 'saveTokenWithPaymentLink',
          'className': 'Magento\\Vault\\Api\\PaymentTokenManagementInterface',
          'line': 66,
          'file': '\/vendor\/magento\/module-vault\/Api\/PaymentTokenManagementInterface.php'
        }
      }]
    }],
    'Frobou_Newsletter': [{
      'around': [{
        'active': 1,
        'name': 'aroundSubscribe',
        'className': 'Frobou\\Newsletter\\Plugin\\Newsletter\\Subscriber',
        'line': 17,
        'file': '\/app\/code\/Frobou\/Newsletter\/Plugin\/Newsletter\/Subscriber.php',
        'origin': {
          'name': 'subscribe',
          'className': 'Magento\\Newsletter\\Model\\Subscriber',
          'line': 442,
          'file': '\/vendor\/magento\/module-newsletter\/Model\/Subscriber.php'
        }
      }]
    }],
    'Frobou_Services': [{
      'before': [{
        'active': 1,
        'name': 'beforePlaceOrder',
        'className': 'Frobou\\Services\\Plugin\\Magento\\Quote\\Model\\QuoteManagementPlugin',
        'line': 68,
        'file': '\/app\/code\/Frobou\/Services\/Plugin\/Magento\/Quote\/Model\/QuoteManagementPlugin.php',
        'origin': {
          'name': 'placeOrder',
          'className': 'Magento\\Quote\\Model\\QuoteManagement',
          'line': 360,
          'file': '\/vendor\/magento\/module-quote\/Model\/QuoteManagement.php'
        }
      }],
      'after': [{
        'active': 1,
        'name': 'afterPlaceOrder',
        'className': 'Frobou\\Services\\Plugin\\Magento\\Quote\\Model\\QuoteManagementPlugin',
        'line': 102,
        'file': '\/app\/code\/Frobou\/Services\/Plugin\/Magento\/Quote\/Model\/QuoteManagementPlugin.php',
        'origin': {
          'name': 'placeOrder',
          'className': 'Magento\\Quote\\Model\\QuoteManagement',
          'line': 360,
          'file': '\/vendor\/magento\/module-quote\/Model\/QuoteManagement.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterGet',
        'className': 'Frobou\\Services\\Plugin\\Magento\\Quote\\Model\\Cart\\CartTotalRepositoryPlugin',
        'line': 37,
        'file': '\/app\/code\/Frobou\/Services\/Plugin\/Magento\/Quote\/Model\/Cart\/CartTotalRepositoryPlugin.php',
        'origin': {
          'name': 'get',
          'className': 'Magento\\Quote\\Model\\Cart\\CartTotalRepository',
          'line': 86,
          'file': '\/vendor\/magento\/module-quote\/Model\/Cart\/CartTotalRepository.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeCalculate',
        'className': 'Frobou\\Services\\Plugin\\Magento\\Checkout\\Model\\TotalsInformationManagementPlugin',
        'line': 23,
        'file': '\/app\/code\/Frobou\/Services\/Plugin\/Magento\/Checkout\/Model\/TotalsInformationManagementPlugin.php',
        'origin': {
          'name': 'calculate',
          'className': '\\Magento\\Checkout\\Model\\TotalsInformationManagement',
          'line': 43,
          'file': '\/vendor\/magento\/module-checkout\/Model\/TotalsInformationManagement.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeSaveAddressInformation',
        'className': 'Frobou\\Services\\Plugin\\Magento\\Checkout\\Api\\ShippingInformationManagementPlugin',
        'line': 22,
        'file': '\/app\/code\/Frobou\/Services\/Plugin\/Magento\/Checkout\/Api\/ShippingInformationManagementPlugin.php',
        'origin': {
          'name': 'saveAddressInformation',
          'className': 'Magento\\Checkout\\Api\\ShippingInformationManagementInterface',
          'line': 20,
          'file': '\/vendor\/magento\/module-checkout\/Api\/ShippingInformationManagementInterface.php'
        }
      }]
    }],
    'Frobou_WishListPreventRedirect': [{
      'after': [{
        'active': 1,
        'name': 'afterExecute',
        'className': 'Frobou\\WishListPreventRedirect\\Plugin\\Wishlist\\AddPlugin',
        'line': 51,
        'file': '\/app\/code\/Frobou\/WishListPreventRedirect\/Plugin\/Wishlist\/AddPlugin.php',
        'origin': {
          'name': 'execute',
          'className': 'Magento\\Wishlist\\Controller\\Index\\Add',
          'line': 73,
          'file': '\/vendor\/magento\/module-wishlist\/Controller\/Index\/Add.php'
        }
      }]
    }],
    'KiwiCommerce_AdminActivity': [{
      'before': [{
        'active': 0,
        'name': 'beforeDispatch',
        'className': 'KiwiCommerce\\AdminActivity\\Plugin\\App\\Action',
        'line': 50,
        'file': '\/app\/code\/KiwiCommerce\/AdminActivity\/Plugin\/App\/Action.php',
        'origin': {
          'name': 'dispatch',
          'className': 'Magento\\Framework\\App\\Action\\AbstractAction',
          'line': 53,
          'file': '\/vendor\/magento\/framework\/App\/Action\/AbstractAction.php'
        }
      }]
    }, {
      'around': [{
        'active': 0,
        'name': 'aroundDelete',
        'className': 'KiwiCommerce\\AdminActivity\\Plugin\\User\\Delete',
        'line': 42,
        'file': '\/app\/code\/KiwiCommerce\/AdminActivity\/Plugin\/User\/Delete.php',
        'origin': {
          'name': 'delete',
          'className': 'Magento\\User\\Model\\ResourceModel\\User',
          'line': 256,
          'file': '\/vendor\/magento\/module-user\/Model\/ResourceModel\/User.php'
        }
      }]
    }, {
      'around': [{
        'active': 0,
        'name': 'aroundLogout',
        'className': 'KiwiCommerce\\AdminActivity\\Plugin\\Auth',
        'line': 61,
        'file': '\/app\/code\/KiwiCommerce\/AdminActivity\/Plugin\/Auth.php',
        'origin': {
          'name': 'logout',
          'className': 'Magento\\Backend\\Model\\Auth',
          'line': 206,
          'file': '\/vendor\/magento\/module-backend\/Model\/Auth.php'
        }
      }]
    }],
    'Klarna_Core': [{
      'after': [{
        'active': 1,
        'name': 'afterGetAddressEditLink',
        'className': 'Klarna\\Core\\Plugin\\Sales\\Block\\Adminhtml\\Order\\View\\InfoPlugin',
        'line': 32,
        'file': '\/vendor\/klarna\/module-core\/Plugin\/Sales\/Block\/Adminhtml\/Order\/View\/InfoPlugin.php',
        'origin': {
          'name': 'getAddressEditLink',
          'className': 'Magento\\Sales\\Block\\Adminhtml\\Order\\View\\Info',
          'line': 221,
          'file': '\/vendor\/magento\/module-sales\/Block\/Adminhtml\/Order\/View\/Info.php'
        }
      }]
    }],
    'Klarna_Kp': [{
      'after': [{
        'active': 1,
        'name': 'afterGetPaymentMethods',
        'className': 'Klarna\\Kp\\Plugin\\Payment\\Helper\\DataPlugin',
        'line': 112,
        'file': '\/vendor\/klarna\/module-kp\/Plugin\/Payment\/Helper\/DataPlugin.php',
        'origin': {
          'name': 'getPaymentMethods',
          'className': 'Magento\\Payment\\Helper\\Data',
          'line': 228,
          'file': '\/vendor\/magento\/module-payment\/Helper\/Data.php'
        }
      }],
      'around': [{
        'active': 1,
        'name': 'aroundGetMethodInstance',
        'className': 'Klarna\\Kp\\Plugin\\Payment\\Helper\\DataPlugin',
        'line': 182,
        'file': '\/vendor\/klarna\/module-kp\/Plugin\/Payment\/Helper\/DataPlugin.php',
        'origin': {
          'name': 'getMethodInstance',
          'className': 'Magento\\Payment\\Helper\\Data',
          'line': 105,
          'file': '\/vendor\/magento\/module-payment\/Helper\/Data.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterIsKlarnaActive',
        'className': 'Klarna\\Kp\\Plugin\\Model\\Checkout\\Orderline\\CollectorPlugin',
        'line': 48,
        'file': '\/vendor\/klarna\/module-kp\/Plugin\/Model\/Checkout\/Orderline\/CollectorPlugin.php',
        'origin': {
          'name': 'isKlarnaActive',
          'className': 'Klarna\\Core\\Model\\Checkout\\Orderline\\Collector',
          'line': 120,
          'file': '\/vendor\/klarna\/module-core\/Model\/Checkout\/Orderline\/Collector.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterKlarnaEnabled',
        'className': 'Klarna\\Kp\\Plugin\\Model\\ConfigPlugin',
        'line': 48,
        'file': '\/vendor\/klarna\/module-kp\/Plugin\/Model\/ConfigPlugin.php',
        'origin': {
          'name': 'klarnaEnabled',
          'className': 'Klarna\\Core\\Model\\Config',
          'line': 150,
          'file': '\/vendor\/klarna\/module-core\/Model\/Config.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterGetOmBuilderType',
        'className': 'Klarna\\Kp\\Plugin\\Helper\\KlarnaConfigPlugin',
        'line': 33,
        'file': '\/vendor\/klarna\/module-kp\/Plugin\/Helper\/KlarnaConfigPlugin.php',
        'origin': {
          'name': 'getOmBuilderType',
          'className': 'Klarna\\Core\\Helper\\KlarnaConfig',
          'line': 341,
          'file': '\/vendor\/klarna\/module-core\/Helper\/KlarnaConfig.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeProcess',
        'className': 'Klarna\\Kp\\Plugin\\Checkout\\Block\\Checkout\\LayoutProcessorPlugin',
        'line': 65,
        'file': '\/vendor\/klarna\/module-kp\/Plugin\/Checkout\/Block\/Checkout\/LayoutProcessorPlugin.php',
        'origin': {
          'name': 'process',
          'className': 'Magento\\Checkout\\Block\\Checkout\\LayoutProcessor',
          'line': 150,
          'file': '\/vendor\/magento\/module-checkout\/Block\/Checkout\/LayoutProcessor.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeSetOrderStatus',
        'className': 'Klarna\\Kp\\Plugin\\Controller\\Api\\NotificationPlugin',
        'line': 33,
        'file': '\/vendor\/klarna\/module-kp\/Plugin\/Controller\/Api\/NotificationPlugin.php',
        'origin': {
          'name': 'setOrderStatus',
          'className': 'Klarna\\Ordermanagement\\Controller\\Api\\Notification',
          'line': 183,
          'file': '\/vendor\/klarna\/module-ordermanagement\/Controller\/Api\/Notification.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeGetAvailableMethods',
        'className': 'Klarna\\Kp\\Plugin\\Model\\MethodListPlugin',
        'line': 59,
        'file': '\/vendor\/klarna\/module-kp\/Plugin\/Model\/MethodListPlugin.php',
        'origin': {
          'name': 'getAvailableMethods',
          'className': 'Magento\\Payment\\Model\\MethodList',
          'line': 58,
          'file': '\/vendor\/magento\/module-payment\/Model\/MethodList.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeGetJsLayout',
        'className': 'Klarna\\Kp\\Plugin\\Checkout\\Block\\OnepagePlugin',
        'line': 68,
        'file': '\/vendor\/klarna\/module-kp\/Plugin\/Checkout\/Block\/OnepagePlugin.php',
        'origin': {
          'name': 'getJsLayout',
          'className': 'Magento\\Checkout\\Block\\Onepage',
          'line': 78,
          'file': '\/vendor\/magento\/module-checkout\/Block\/Onepage.php'
        }
      }]
    }],
    'Magento_PaypalReCaptcha': [{
      'after': [{
        'active': 0,
        'name': 'afterGetCaptchaSettings',
        'className': 'Magento\\PaypalReCaptcha\\Plugin\\LayoutSettings',
        'line': 38,
        'file': '\/vendor\/magento\/module-paypal-recaptcha\/Plugin\/LayoutSettings.php',
        'origin': {
          'name': 'getCaptchaSettings',
          'className': 'MSP\\ReCaptcha\\Model\\LayoutSettings',
          'line': 45,
          'file': '\/vendor\/msp\/recaptcha\/Model\/LayoutSettings.php'
        }
      }]
    }],
    'MSP_TwoFactorAuth': [{
      'before': [{
        'active': 1,
        'name': 'beforeToHtml',
        'className': 'MSP\\TwoFactorAuth\\Plugin\\Block\\User\\Edit\\TabsPlugin',
        'line': 55,
        'file': '\/vendor\/msp\/twofactorauth\/Plugin\/Block\/User\/Edit\/TabsPlugin.php',
        'origin': {
          'name': 'toHtml',
          'className': 'Magento\\User\\Block\\User\\Edit\\Tabs',
          'line': 661,
          'file': '\/vendor\/magento\/module-user\/Block\/User\/Edit\/Tabs.php'
        }
      }]
    }, {
      'around': [{
        'active': 1,
        'name': 'aroundExecute',
        'className': 'MSP\\TwoFactorAuth\\Plugin\\Observer\\Backend\\ForceAdminPasswordChangeObserverPlugin',
        'line': 54,
        'file': '\/vendor\/msp\/twofactorauth\/Plugin\/Observer\/Backend\/ForceAdminPasswordChangeObserverPlugin.php',
        'origin': {
          'name': 'execute',
          'className': 'Magento\\User\\Observer\\Backend\\ForceAdminPasswordChangeObserver',
          'line': 99,
          'file': '\/vendor\/magento\/module-user\/Observer\/Backend\/ForceAdminPasswordChangeObserver.php'
        }
      }]
    }],
    'MageWorx_SearchSuiteAutocomplete': [{
      'after': [{
        'active': 1,
        'name': 'afterToHtml',
        'className': 'MageWorx\\SearchSuiteAutocomplete\\Plugin\\AddPromotionToConfigPlugin',
        'line': 39,
        'file': '\/app\/code\/MageWorx\/SearchSuiteAutocomplete\/Plugin\/AddPromotionToConfigPlugin.php',
        'origin': {
          'name': 'toHtml',
          'className': 'Magento\\Config\\Block\\System\\Config\\Edit',
          'line': 661,
          'file': '\/vendor\/magento\/module-config\/Block\/System\/Config\/Edit.php'
        }
      }]
    }],
    'Mageplaza_Core': [{
      'before': [{
        'active': 1,
        'name': 'beforeMerge',
        'className': 'Mageplaza\\Core\\Model\\Config\\Structure\\Data',
        'line': 60,
        'file': '\/vendor\/mageplaza\/module-core\/Model\/Config\/Structure\/Data.php',
        'origin': {
          'name': 'merge',
          'className': 'Magento\\Config\\Model\\Config\\Structure\\Data',
          'line': 42,
          'file': '\/vendor\/magento\/module-config\/Model\/Config\/Structure\/Data.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterExecute',
        'className': 'Mageplaza\\Core\\Plugin\\MoveMenu',
        'line': 56,
        'file': '\/vendor\/mageplaza\/module-core\/Plugin\/MoveMenu.php',
        'origin': {
          'name': 'execute',
          'className': 'Magento\\Backend\\Model\\Menu\\Builder\\AbstractCommand',
          'line': 83,
          'file': '\/vendor\/magento\/module-backend\/Model\/Menu\/Builder\/AbstractCommand.php'
        }
      }]
    }],
    'Mageplaza_DeleteOrders': [{
      'before': [{
        'active': 1,
        'name': 'beforeSetLayout',
        'className': 'Mageplaza\\DeleteOrders\\Plugin\\Order\\AddDeleteButton',
        'line': 65,
        'file': '\/vendor\/mageplaza\/module-delete-orders\/Plugin\/Order\/AddDeleteButton.php',
        'origin': {
          'name': 'setLayout',
          'className': 'Magento\\Sales\\Block\\Adminhtml\\Order\\View',
          'line': 280,
          'file': '\/vendor\/magento\/module-sales\/Block\/Adminhtml\/Order\/View.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterGetChildComponents',
        'className': 'Mageplaza\\DeleteOrders\\Plugin\\Order\\AddDeleteAction',
        'line': 64,
        'file': '\/vendor\/mageplaza\/module-delete-orders\/Plugin\/Order\/AddDeleteAction.php',
        'origin': {
          'name': 'getChildComponents',
          'className': 'Magento\\Ui\\Component\\MassAction',
          'line': 189,
          'file': '\/vendor\/magento\/module-ui\/Component\/MassAction.php'
        }
      }]
    }],
    'Mageplaza_Smtp': [{
      'before': [{
        'active': 1,
        'name': 'beforeSetTemplateOptions',
        'className': 'Mageplaza\\Smtp\\Mail\\Template\\TransportBuilder',
        'line': 74,
        'file': '\/vendor\/mageplaza\/module-smtp\/Mail\/Template\/TransportBuilder.php',
        'origin': {
          'name': 'setTemplateOptions',
          'className': 'Magento\\Framework\\Mail\\Template\\TransportBuilder',
          'line': 321,
          'file': '\/vendor\/magento\/framework\/Mail\/Template\/TransportBuilder.php'
        }
      }, {
        'active': 1,
        'name': 'beforeSetFrom',
        'className': 'Mageplaza\\Smtp\\Mail\\Template\\TransportBuilder',
        'line': 93,
        'file': '\/vendor\/mageplaza\/module-smtp\/Mail\/Template\/TransportBuilder.php',
        'origin': {
          'name': 'setFrom',
          'className': 'Magento\\Framework\\Mail\\Template\\TransportBuilder',
          'line': 250,
          'file': '\/vendor\/magento\/framework\/Mail\/Template\/TransportBuilder.php'
        }
      }]
    }, {
      'around': [{
        'active': 1,
        'name': 'aroundSendMessage',
        'className': 'Mageplaza\\Smtp\\Mail\\Transport',
        'line': 106,
        'file': '\/vendor\/mageplaza\/module-smtp\/Mail\/Transport.php',
        'origin': {
          'name': 'sendMessage',
          'className': 'Magento\\Framework\\Mail\\TransportInterface',
          'line': 22,
          'file': '\/vendor\/magento\/framework\/Mail\/TransportInterface.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeSetFromByStore',
        'className': 'Mageplaza\\Smtp\\Plugin\\Message',
        'line': 67,
        'file': '\/vendor\/mageplaza\/module-smtp\/Plugin\/Message.php',
        'origin': {
          'name': 'setFromByStore',
          'className': 'Magento\\Framework\\Mail\\Template\\TransportBuilderByStore',
          'line': 54,
          'file': '\/vendor\/magento\/framework\/Mail\/Template\/TransportBuilderByStore.php'
        }
      }]
    }],
    'Olivas_CustomAddress': [{
      'after': [{
        'active': 1,
        'name': 'afterProcess',
        'className': 'Olivas\\CustomAddress\\Checkout\\Block\\Checkout\\LayoutProcessorPlugin',
        'line': 12,
        'file': '\/app\/code\/Olivas\/CustomAddress\/Checkout\/Block\/Checkout\/LayoutProcessorPlugin.php',
        'origin': {
          'name': 'process',
          'className': 'Magento\\Checkout\\Block\\Checkout\\LayoutProcessor',
          'line': 150,
          'file': '\/vendor\/magento\/module-checkout\/Block\/Checkout\/LayoutProcessor.php'
        }
      }]
    }],
    'Frobou_FreeShippingFrenet': [{
      'after': [{
        'active': 1,
        'name': 'afterValidate',
        'className': 'Frobou\\FreeShippingFrenet\\Plugin\\Frenet\\Shipping\\Model\\Quote\\ItemValidator',
        'line': 94,
        'file': '\/app\/code\/Frobou\/FreeShippingFrenet\/Plugin\/Frenet\/Shipping\/Model\/Quote\/ItemValidator.php',
        'origin': {
          'name': 'validate',
          'className': 'Frenet\\Shipping\\Model\\Quote\\ItemValidator',
          'line': 28,
          'file': '\/vendor\/frenet\/frenet-magento2\/Model\/Quote\/ItemValidator.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterEstimateByAddress',
        'className': 'Frobou\\FreeShippingFrenet\\Plugin\\Magento\\Quote\\Model\\ShippingMethodManagement',
        'line': 32,
        'file': '\/app\/code\/Frobou\/FreeShippingFrenet\/Plugin\/Magento\/Quote\/Model\/ShippingMethodManagement.php',
        'origin': {
          'name': 'estimateByAddress',
          'className': 'Magento\\Quote\\Model\\ShippingMethodManagement',
          'line': 214,
          'file': '\/vendor\/magento\/module-quote\/Model\/ShippingMethodManagement.php'
        }
      }, {
        'active': 1,
        'name': 'afterEstimateByExtendedAddress',
        'className': 'Frobou\\FreeShippingFrenet\\Plugin\\Magento\\Quote\\Model\\ShippingMethodManagement',
        'line': 42,
        'file': '\/app\/code\/Frobou\/FreeShippingFrenet\/Plugin\/Magento\/Quote\/Model\/ShippingMethodManagement.php',
        'origin': {
          'name': 'estimateByExtendedAddress',
          'className': 'Magento\\Quote\\Model\\ShippingMethodManagement',
          'line': 230,
          'file': '\/vendor\/magento\/module-quote\/Model\/ShippingMethodManagement.php'
        }
      }, {
        'active': 1,
        'name': 'afterEstimateByAddressId',
        'className': 'Frobou\\FreeShippingFrenet\\Plugin\\Magento\\Quote\\Model\\ShippingMethodManagement',
        'line': 52,
        'file': '\/app\/code\/Frobou\/FreeShippingFrenet\/Plugin\/Magento\/Quote\/Model\/ShippingMethodManagement.php',
        'origin': {
          'name': 'estimateByAddressId',
          'className': 'Magento\\Quote\\Model\\ShippingMethodManagement',
          'line': 245,
          'file': '\/vendor\/magento\/module-quote\/Model\/ShippingMethodManagement.php'
        }
      }]
    }],
    'SystemCode_BrazilCustomerAttributes': [{
      'after': [{
        'active': 1,
        'name': 'afterProcess',
        'className': 'SystemCode\\BrazilCustomerAttributes\\Plugin\\Checkout\\LayoutProcessor',
        'line': 56,
        'file': '\/app\/code\/SystemCode\/BrazilCustomerAttributes\/Plugin\/Checkout\/LayoutProcessor.php',
        'origin': {
          'name': 'process',
          'className': 'Magento\\Checkout\\Block\\Checkout\\LayoutProcessor',
          'line': 150,
          'file': '\/vendor\/magento\/module-checkout\/Block\/Checkout\/LayoutProcessor.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeAssign',
        'className': 'SystemCode\\BrazilCustomerAttributes\\Plugin\\Quote\\BillingAddressManagement',
        'line': 49,
        'file': '\/app\/code\/SystemCode\/BrazilCustomerAttributes\/Plugin\/Quote\/BillingAddressManagement.php',
        'origin': {
          'name': 'assign',
          'className': 'Magento\\Quote\\Model\\BillingAddressManagement',
          'line': 75,
          'file': '\/vendor\/magento\/module-quote\/Model\/BillingAddressManagement.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeAssign',
        'className': 'SystemCode\\BrazilCustomerAttributes\\Plugin\\Quote\\ShippingAddressManagement',
        'line': 45,
        'file': '\/app\/code\/SystemCode\/BrazilCustomerAttributes\/Plugin\/Quote\/ShippingAddressManagement.php',
        'origin': {
          'name': 'assign',
          'className': 'Magento\\Quote\\Model\\ShippingAddressManagement',
          'line': 85,
          'file': '\/vendor\/magento\/module-quote\/Model\/ShippingAddressManagement.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeSavePaymentInformationAndPlaceOrder',
        'className': 'SystemCode\\BrazilCustomerAttributes\\Plugin\\Checkout\\PaymentInformationManagement',
        'line': 48,
        'file': '\/app\/code\/SystemCode\/BrazilCustomerAttributes\/Plugin\/Checkout\/PaymentInformationManagement.php',
        'origin': {
          'name': 'savePaymentInformationAndPlaceOrder',
          'className': 'Magento\\Checkout\\Model\\PaymentInformationManagement',
          'line': 79,
          'file': '\/vendor\/magento\/module-checkout\/Model\/PaymentInformationManagement.php'
        }
      }]
    }],
    'Temando_Shipping': [{
      'after': [{
        'active': 1,
        'name': 'afterGetExcludes',
        'className': 'Temando\\Shipping\\Plugin\\View\\MinificationPlugin',
        'line': 33,
        'file': '\/vendor\/temando\/module-shipping-m2\/Plugin\/View\/MinificationPlugin.php',
        'origin': {
          'name': 'getExcludes',
          'className': 'Magento\\Framework\\View\\Asset\\Minification',
          'line': 148,
          'file': '\/vendor\/magento\/framework\/View\/Asset\/Minification.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeCollectRates',
        'className': 'Temando\\Shipping\\Plugin\\Shipping\\CollectRatesPlugin',
        'line': 110,
        'file': '\/vendor\/temando\/module-shipping-m2\/Plugin\/Shipping\/CollectRatesPlugin.php',
        'origin': {
          'name': 'collectRates',
          'className': 'Magento\\Quote\\Model\\Quote\\Address\\RateCollectorInterface',
          'line': 18,
          'file': '\/vendor\/magento\/module-quote\/Model\/Quote\/Address\/RateCollectorInterface.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterConvert',
        'className': 'Temando\\Shipping\\Plugin\\Quote\\Address\\ToOrderAddressPlugin',
        'line': 69,
        'file': '\/vendor\/temando\/module-shipping-m2\/Plugin\/Quote\/Address\/ToOrderAddressPlugin.php',
        'origin': {
          'name': 'convert',
          'className': 'Magento\\Quote\\Model\\Quote\\Address\\ToOrderAddress',
          'line': 54,
          'file': '\/vendor\/magento\/module-quote\/Model\/Quote\/Address\/ToOrderAddress.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterCancel',
        'className': 'Temando\\Shipping\\Plugin\\Sales\\OrderManagementPlugin',
        'line': 83,
        'file': '\/vendor\/temando\/module-shipping-m2\/Plugin\/Sales\/OrderManagementPlugin.php',
        'origin': {
          'name': 'cancel',
          'className': 'Magento\\Sales\\Api\\OrderManagementInterface',
          'line': 26,
          'file': '\/vendor\/magento\/module-sales\/Api\/OrderManagementInterface.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterSave',
        'className': 'Temando\\Shipping\\Plugin\\Sales\\OrderRepositoryPlugin',
        'line': 93,
        'file': '\/vendor\/temando\/module-shipping-m2\/Plugin\/Sales\/OrderRepositoryPlugin.php',
        'origin': {
          'name': 'save',
          'className': 'Magento\\Sales\\Api\\OrderRepositoryInterface',
          'line': 53,
          'file': '\/vendor\/magento\/module-sales\/Api\/OrderRepositoryInterface.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterGet',
        'className': 'Temando\\Shipping\\Plugin\\Sales\\Order\\ShipmentRepositoryPlugin',
        'line': 64,
        'file': '\/vendor\/temando\/module-shipping-m2\/Plugin\/Sales\/Order\/ShipmentRepositoryPlugin.php',
        'origin': {
          'name': 'get',
          'className': 'Magento\\Sales\\Api\\ShipmentRepositoryInterface',
          'line': 36,
          'file': '\/vendor\/magento\/module-sales\/Api\/ShipmentRepositoryInterface.php'
        }
      }],
      'around': [{
        'active': 1,
        'name': 'aroundSave',
        'className': 'Temando\\Shipping\\Plugin\\Sales\\Order\\ShipmentRepositoryPlugin',
        'line': 108,
        'file': '\/vendor\/temando\/module-shipping-m2\/Plugin\/Sales\/Order\/ShipmentRepositoryPlugin.php',
        'origin': {
          'name': 'save',
          'className': 'Magento\\Sales\\Api\\ShipmentRepositoryInterface',
          'line': 52,
          'file': '\/vendor\/magento\/module-sales\/Api\/ShipmentRepositoryInterface.php'
        }
      }]
    }, {
      'around': [{
        'active': 1,
        'name': 'aroundCreate',
        'className': 'Temando\\Shipping\\Plugin\\Sales\\Order\\ShipmentDocumentFactoryPlugin',
        'line': 87,
        'file': '\/vendor\/temando\/module-shipping-m2\/Plugin\/Sales\/Order\/ShipmentDocumentFactoryPlugin.php',
        'origin': {
          'name': 'create',
          'className': 'Magento\\Sales\\Model\\Order\\ShipmentDocumentFactory',
          'line': 83,
          'file': '\/vendor\/magento\/module-sales\/Model\/Order\/ShipmentDocumentFactory.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterCreate',
        'className': 'Temando\\Shipping\\Plugin\\Sales\\Order\\ShippingBuilderPlugin',
        'line': 74,
        'file': '\/vendor\/temando\/module-shipping-m2\/Plugin\/Sales\/Order\/ShippingBuilderPlugin.php',
        'origin': {
          'name': 'create',
          'className': 'Magento\\Sales\\Model\\Order\\ShippingBuilder',
          'line': 75,
          'file': '\/vendor\/magento\/module-sales\/Model\/Order\/ShippingBuilder.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterGetAddressesHtmlSelect',
        'className': 'Temando\\Shipping\\Plugin\\Multishipping\\Checkout\\GetAddressesHtmlSelectPlugin',
        'line': 183,
        'file': '\/vendor\/temando\/module-shipping-m2\/Plugin\/Multishipping\/Checkout\/GetAddressesHtmlSelectPlugin.php',
        'origin': {
          'name': 'getAddressesHtmlSelect',
          'className': 'Magento\\Multishipping\\Block\\Checkout\\Addresses',
          'line': 113,
          'file': '\/vendor\/magento\/module-multishipping\/Block\/Checkout\/Addresses.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterSave',
        'className': 'Temando\\Shipping\\Plugin\\Multishipping\\Checkout\\MultishippingSavePlugin',
        'line': 158,
        'file': '\/vendor\/temando\/module-shipping-m2\/Plugin\/Multishipping\/Checkout\/MultishippingSavePlugin.php',
        'origin': {
          'name': 'save',
          'className': 'Magento\\Multishipping\\Model\\Checkout\\Type\\Multishipping',
          'line': 877,
          'file': '\/vendor\/magento\/module-multishipping\/Model\/Checkout\/Type\/Multishipping.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterLoad',
        'className': 'Temando\\Shipping\\Plugin\\Shipping\\Order\\ShipmentLoaderPlugin',
        'line': 74,
        'file': '\/vendor\/temando\/module-shipping-m2\/Plugin\/Shipping\/Order\/ShipmentLoaderPlugin.php',
        'origin': {
          'name': 'load',
          'className': 'Magento\\Shipping\\Controller\\Adminhtml\\Order\\ShipmentLoader',
          'line': 107,
          'file': '\/vendor\/magento\/module-shipping\/Controller\/Adminhtml\/Order\/ShipmentLoader.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterHasInvoiceShipmentTypeMismatch',
        'className': 'Temando\\Shipping\\Plugin\\Sales\\Order\\Invoice\\Create\\FormPlugin',
        'line': 28,
        'file': '\/vendor\/temando\/module-shipping-m2\/Plugin\/Sales\/Order\/Invoice\/Create\/FormPlugin.php',
        'origin': {
          'name': 'hasInvoiceShipmentTypeMismatch',
          'className': 'Magento\\Sales\\Block\\Adminhtml\\Order\\Invoice\\Create\\Form',
          'line': 77,
          'file': '\/vendor\/magento\/module-sales\/Block\/Adminhtml\/Order\/Invoice\/Create\/Form.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeSetLayout',
        'className': 'Temando\\Shipping\\Plugin\\Rma\\AddRmaToolbarButtonPlugin',
        'line': 67,
        'file': '\/vendor\/temando\/module-shipping-m2\/Plugin\/Rma\/AddRmaToolbarButtonPlugin.php',
        'origin': {
          'name': 'setLayout',
          'className': 'Magento\\Rma\\Block\\Adminhtml\\Rma\\Edit',
          'line': 280,
          'file': '\/vendor\/magento\/module-rma\/Block\/Adminhtml\/Rma\/Edit.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeSetLayout',
        'className': 'Temando\\Shipping\\Plugin\\Shipping\\AddShipmentViewToolbarButtonPlugin',
        'line': 63,
        'file': '\/vendor\/temando\/module-shipping-m2\/Plugin\/Shipping\/AddShipmentViewToolbarButtonPlugin.php',
        'origin': {
          'name': 'setLayout',
          'className': 'Magento\\Shipping\\Block\\Adminhtml\\View',
          'line': 280,
          'file': '\/vendor\/magento\/module-shipping\/Block\/Adminhtml\/View.php'
        }
      }]
    }],
    'Vertex_Tax': [{
      'after': [{
        'active': 1,
        'name': 'afterCreate',
        'className': 'Vertex\\Tax\\Model\\Plugin\\SoapClientFactoryPlugin',
        'line': 35,
        'file': '\/vendor\/vertex\/module-tax\/Model\/Plugin\/SoapClientFactoryPlugin.php',
        'origin': {
          'name': 'create',
          'className': 'Vertex\\Utility\\SoapClientFactory',
          'line': 69,
          'file': '\/vendor\/vertex\/sdk\/src\/Utility\/SoapClientFactory.php'
        }
      }, {
        'active': 1,
        'name': 'afterGetDefaultOptions',
        'className': 'Vertex\\Tax\\Model\\Plugin\\SoapClientFactoryPlugin',
        'line': 48,
        'file': '\/vendor\/vertex\/module-tax\/Model\/Plugin\/SoapClientFactoryPlugin.php',
        'origin': {
          'name': 'getDefaultOptions',
          'className': 'Vertex\\Utility\\SoapClientFactory',
          'line': 80,
          'file': '\/vendor\/vertex\/sdk\/src\/Utility\/SoapClientFactory.php'
        }
      }]
    }, {
      'around': [{
        'active': 1,
        'name': 'aroundCreate',
        'className': 'Vertex\\Tax\\Model\\Plugin\\ServiceActionPerformerFactoryPlugin',
        'line': 40,
        'file': '\/vendor\/vertex\/module-tax\/Model\/Plugin\/ServiceActionPerformerFactoryPlugin.php',
        'origin': {
          'name': 'create',
          'className': 'Vertex\\Utility\\ServiceActionPerformerFactory',
          'line': 27,
          'file': '\/vendor\/vertex\/sdk\/src\/Utility\/ServiceActionPerformerFactory.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterGetList',
        'className': 'Vertex\\Tax\\Model\\Plugin\\CustomerRepositoryPlugin',
        'line': 76,
        'file': '\/vendor\/vertex\/module-tax\/Model\/Plugin\/CustomerRepositoryPlugin.php',
        'origin': {
          'name': 'getList',
          'className': 'Magento\\Customer\\Api\\CustomerRepositoryInterface',
          'line': 61,
          'file': '\/vendor\/magento\/module-customer\/Api\/CustomerRepositoryInterface.php'
        }
      }, {
        'active': 1,
        'name': 'afterGetById',
        'className': 'Vertex\\Tax\\Model\\Plugin\\CustomerRepositoryPlugin',
        'line': 113,
        'file': '\/vendor\/vertex\/module-tax\/Model\/Plugin\/CustomerRepositoryPlugin.php',
        'origin': {
          'name': 'getById',
          'className': 'Magento\\Customer\\Api\\CustomerRepositoryInterface',
          'line': 48,
          'file': '\/vendor\/magento\/module-customer\/Api\/CustomerRepositoryInterface.php'
        }
      }, {
        'active': 1,
        'name': 'afterGet',
        'className': 'Vertex\\Tax\\Model\\Plugin\\CustomerRepositoryPlugin',
        'line': 143,
        'file': '\/vendor\/vertex\/module-tax\/Model\/Plugin\/CustomerRepositoryPlugin.php',
        'origin': {
          'name': 'get',
          'className': 'Magento\\Customer\\Api\\CustomerRepositoryInterface',
          'line': 38,
          'file': '\/vendor\/magento\/module-customer\/Api\/CustomerRepositoryInterface.php'
        }
      }],
      'around': [{
        'active': 1,
        'name': 'aroundSave',
        'className': 'Vertex\\Tax\\Model\\Plugin\\CustomerRepositoryPlugin',
        'line': 161,
        'file': '\/vendor\/vertex\/module-tax\/Model\/Plugin\/CustomerRepositoryPlugin.php',
        'origin': {
          'name': 'save',
          'className': 'Magento\\Customer\\Api\\CustomerRepositoryInterface',
          'line': 27,
          'file': '\/vendor\/magento\/module-customer\/Api\/CustomerRepositoryInterface.php'
        }
      }, {
        'active': 1,
        'name': 'aroundDelete',
        'className': 'Vertex\\Tax\\Model\\Plugin\\CustomerRepositoryPlugin',
        'line': 208,
        'file': '\/vendor\/vertex\/module-tax\/Model\/Plugin\/CustomerRepositoryPlugin.php',
        'origin': {
          'name': 'delete',
          'className': 'Magento\\Customer\\Api\\CustomerRepositoryInterface',
          'line': 70,
          'file': '\/vendor\/magento\/module-customer\/Api\/CustomerRepositoryInterface.php'
        }
      }, {
        'active': 1,
        'name': 'aroundDeleteById',
        'className': 'Vertex\\Tax\\Model\\Plugin\\CustomerRepositoryPlugin',
        'line': 232,
        'file': '\/vendor\/vertex\/module-tax\/Model\/Plugin\/CustomerRepositoryPlugin.php',
        'origin': {
          'name': 'deleteById',
          'className': 'Magento\\Customer\\Api\\CustomerRepositoryInterface',
          'line': 80,
          'file': '\/vendor\/magento\/module-customer\/Api\/CustomerRepositoryInterface.php'
        }
      }]
    }, {
      'around': [{
        'active': 1,
        'name': 'aroundCalculateTax',
        'className': 'Vertex\\Tax\\Model\\Plugin\\TaxCalculationPlugin',
        'line': 57,
        'file': '\/vendor\/vertex\/module-tax\/Model\/Plugin\/TaxCalculationPlugin.php',
        'origin': {
          'name': 'calculateTax',
          'className': 'Magento\\Tax\\Api\\TaxCalculationInterface',
          'line': 32,
          'file': '\/vendor\/magento\/module-tax\/Api\/TaxCalculationInterface.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterMapItems',
        'className': 'Vertex\\Tax\\Model\\Plugin\\CommonTaxCollectorPlugin',
        'line': 83,
        'file': '\/vendor\/vertex\/module-tax\/Model\/Plugin\/CommonTaxCollectorPlugin.php',
        'origin': {
          'name': 'mapItems',
          'className': 'Magento\\Tax\\Model\\Sales\\Total\\Quote\\CommonTaxCollector',
          'line': 345,
          'file': '\/vendor\/magento\/module-tax\/Model\/Sales\/Total\/Quote\/CommonTaxCollector.php'
        }
      }],
      'around': [{
        'active': 1,
        'name': 'aroundGetShippingDataObject',
        'className': 'Vertex\\Tax\\Model\\Plugin\\CommonTaxCollectorPlugin',
        'line': 143,
        'file': '\/vendor\/vertex\/module-tax\/Model\/Plugin\/CommonTaxCollectorPlugin.php',
        'origin': {
          'name': 'getShippingDataObject',
          'className': 'Magento\\Tax\\Model\\Sales\\Total\\Quote\\CommonTaxCollector',
          'line': 426,
          'file': '\/vendor\/magento\/module-tax\/Model\/Sales\/Total\/Quote\/CommonTaxCollector.php'
        }
      }, {
        'active': 1,
        'name': 'aroundMapAddress',
        'className': 'Vertex\\Tax\\Model\\Plugin\\CommonTaxCollectorPlugin',
        'line': 187,
        'file': '\/vendor\/vertex\/module-tax\/Model\/Plugin\/CommonTaxCollectorPlugin.php',
        'origin': {
          'name': 'mapAddress',
          'className': 'Magento\\Tax\\Model\\Sales\\Total\\Quote\\CommonTaxCollector',
          'line': 189,
          'file': '\/vendor\/magento\/module-tax\/Model\/Sales\/Total\/Quote\/CommonTaxCollector.php'
        }
      }, {
        'active': 1,
        'name': 'aroundMapItem',
        'className': 'Vertex\\Tax\\Model\\Plugin\\CommonTaxCollectorPlugin',
        'line': 216,
        'file': '\/vendor\/vertex\/module-tax\/Model\/Plugin\/CommonTaxCollectorPlugin.php',
        'origin': {
          'name': 'mapItem',
          'className': 'Magento\\Tax\\Model\\Sales\\Total\\Quote\\CommonTaxCollector',
          'line': 213,
          'file': '\/vendor\/magento\/module-tax\/Model\/Sales\/Total\/Quote\/CommonTaxCollector.php'
        }
      }, {
        'active': 1,
        'name': 'aroundMapItemExtraTaxables',
        'className': 'Vertex\\Tax\\Model\\Plugin\\CommonTaxCollectorPlugin',
        'line': 261,
        'file': '\/vendor\/vertex\/module-tax\/Model\/Plugin\/CommonTaxCollectorPlugin.php',
        'origin': {
          'name': 'mapItemExtraTaxables',
          'className': 'Magento\\Tax\\Model\\Sales\\Total\\Quote\\CommonTaxCollector',
          'line': 297,
          'file': '\/vendor\/magento\/module-tax\/Model\/Sales\/Total\/Quote\/CommonTaxCollector.php'
        }
      }]
    }, {
      'around': [{
        'active': 1,
        'name': 'aroundCollect',
        'className': 'Vertex\\Tax\\Model\\Plugin\\SubtotalPlugin',
        'line': 47,
        'file': '\/vendor\/vertex\/module-tax\/Model\/Plugin\/SubtotalPlugin.php',
        'origin': {
          'name': 'collect',
          'className': 'Magento\\Tax\\Model\\Sales\\Total\\Quote\\Subtotal',
          'line': 26,
          'file': '\/vendor\/magento\/module-tax\/Model\/Sales\/Total\/Quote\/Subtotal.php'
        }
      }]
    }, {
      'around': [{
        'active': 1,
        'name': 'aroundMapQuoteExtraTaxables',
        'className': 'Vertex\\Tax\\Model\\Plugin\\TaxPlugin',
        'line': 49,
        'file': '\/vendor\/vertex\/module-tax\/Model\/Plugin\/TaxPlugin.php',
        'origin': {
          'name': 'mapQuoteExtraTaxables',
          'className': 'Magento\\Tax\\Model\\Sales\\Total\\Quote\\Tax',
          'line': 222,
          'file': '\/vendor\/magento\/module-tax\/Model\/Sales\/Total\/Quote\/Tax.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeGetOrderDataJson',
        'className': 'Vertex\\Tax\\Block\\Plugin\\OrderCreateFormPlugin',
        'line': 29,
        'file': '\/vendor\/vertex\/module-tax\/Block\/Plugin\/OrderCreateFormPlugin.php',
        'origin': {
          'name': 'getOrderDataJson',
          'className': 'Magento\\Sales\\Block\\Adminhtml\\Order\\Create\\Form',
          'line': 164,
          'file': '\/vendor\/magento\/module-sales\/Block\/Adminhtml\/Order\/Create\/Form.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterGetTotals',
        'className': 'Vertex\\Tax\\Block\\Plugin\\OrderCreateTotalsPlugin',
        'line': 65,
        'file': '\/vendor\/vertex\/module-tax\/Block\/Plugin\/OrderCreateTotalsPlugin.php',
        'origin': {
          'name': 'getTotals',
          'className': 'Magento\\Sales\\Block\\Adminhtml\\Order\\Create\\Totals',
          'line': 86,
          'file': '\/vendor\/magento\/module-sales\/Block\/Adminhtml\/Order\/Create\/Totals.php'
        }
      }]
    }, {
      'around': [{
        'active': 1,
        'name': 'aroundProcess',
        'className': 'Vertex\\Tax\\Model\\Plugin\\TotalsCalculationMessagePlugin',
        'line': 72,
        'file': '\/vendor\/vertex\/module-tax\/Model\/Plugin\/TotalsCalculationMessagePlugin.php',
        'origin': {
          'name': 'process',
          'className': 'Magento\\Quote\\Model\\Cart\\TotalsConverter',
          'line': 34,
          'file': '\/vendor\/magento\/module-quote\/Model\/Cart\/TotalsConverter.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterGet',
        'className': 'Vertex\\Tax\\Model\\Plugin\\CustomOptionFlexFieldExtensionAttributeHandler',
        'line': 83,
        'file': '\/vendor\/vertex\/module-tax\/Model\/Plugin\/CustomOptionFlexFieldExtensionAttributeHandler.php',
        'origin': {
          'name': 'get',
          'className': 'Magento\\Catalog\\Api\\ProductCustomOptionRepositoryInterface',
          'line': 41,
          'file': '\/vendor\/magento\/module-catalog\/Api\/ProductCustomOptionRepositoryInterface.php'
        }
      }, {
        'active': 1,
        'name': 'afterGetList',
        'className': 'Vertex\\Tax\\Model\\Plugin\\CustomOptionFlexFieldExtensionAttributeHandler',
        'line': 116,
        'file': '\/vendor\/vertex\/module-tax\/Model\/Plugin\/CustomOptionFlexFieldExtensionAttributeHandler.php',
        'origin': {
          'name': 'getList',
          'className': 'Magento\\Catalog\\Api\\ProductCustomOptionRepositoryInterface',
          'line': 21,
          'file': '\/vendor\/magento\/module-catalog\/Api\/ProductCustomOptionRepositoryInterface.php'
        }
      }, {
        'active': 1,
        'name': 'afterGetProductOptions',
        'className': 'Vertex\\Tax\\Model\\Plugin\\CustomOptionFlexFieldExtensionAttributeHandler',
        'line': 149,
        'file': '\/vendor\/vertex\/module-tax\/Model\/Plugin\/CustomOptionFlexFieldExtensionAttributeHandler.php',
        'origin': {
          'name': 'getProductOptions',
          'className': 'Magento\\Catalog\\Api\\ProductCustomOptionRepositoryInterface',
          'line': 29,
          'file': '\/vendor\/magento\/module-catalog\/Api\/ProductCustomOptionRepositoryInterface.php'
        }
      }, {
        'active': 1,
        'name': 'afterSave',
        'className': 'Vertex\\Tax\\Model\\Plugin\\CustomOptionFlexFieldExtensionAttributeHandler',
        'line': 184,
        'file': '\/vendor\/vertex\/module-tax\/Model\/Plugin\/CustomOptionFlexFieldExtensionAttributeHandler.php',
        'origin': {
          'name': 'save',
          'className': 'Magento\\Catalog\\Api\\ProductCustomOptionRepositoryInterface',
          'line': 70,
          'file': '\/vendor\/magento\/module-catalog\/Api\/ProductCustomOptionRepositoryInterface.php'
        }
      }],
      'around': [{
        'active': 1,
        'name': 'aroundDelete',
        'className': 'Vertex\\Tax\\Model\\Plugin\\CustomOptionFlexFieldExtensionAttributeHandler',
        'line': 233,
        'file': '\/vendor\/vertex\/module-tax\/Model\/Plugin\/CustomOptionFlexFieldExtensionAttributeHandler.php',
        'origin': {
          'name': 'delete',
          'className': 'Magento\\Catalog\\Api\\ProductCustomOptionRepositoryInterface',
          'line': 49,
          'file': '\/vendor\/magento\/module-catalog\/Api\/ProductCustomOptionRepositoryInterface.php'
        }
      }, {
        'active': 1,
        'name': 'aroundDuplicate',
        'className': 'Vertex\\Tax\\Model\\Plugin\\CustomOptionFlexFieldExtensionAttributeHandler',
        'line': 253,
        'file': '\/vendor\/vertex\/module-tax\/Model\/Plugin\/CustomOptionFlexFieldExtensionAttributeHandler.php',
        'origin': {
          'name': 'duplicate',
          'className': 'Magento\\Catalog\\Api\\ProductCustomOptionRepositoryInterface',
          'line': 59,
          'file': '\/vendor\/magento\/module-catalog\/Api\/ProductCustomOptionRepositoryInterface.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterMergeProductOptions',
        'className': 'Vertex\\Tax\\Model\\Plugin\\CustomOptionFlexFieldExtensionAttributeInitializer',
        'line': 32,
        'file': '\/vendor\/vertex\/module-tax\/Model\/Plugin\/CustomOptionFlexFieldExtensionAttributeInitializer.php',
        'origin': {
          'name': 'mergeProductOptions',
          'className': 'Magento\\Catalog\\Controller\\Adminhtml\\Product\\Initialization\\Helper',
          'line': 315,
          'file': '\/vendor\/magento\/module-catalog\/Controller\/Adminhtml\/Product\/Initialization\/Helper.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterGet',
        'className': 'Vertex\\Tax\\Model\\Plugin\\OrderRepositoryPlugin',
        'line': 53,
        'file': '\/vendor\/vertex\/module-tax\/Model\/Plugin\/OrderRepositoryPlugin.php',
        'origin': {
          'name': 'get',
          'className': 'Magento\\Sales\\Api\\OrderRepositoryInterface',
          'line': 37,
          'file': '\/vendor\/magento\/module-sales\/Api\/OrderRepositoryInterface.php'
        }
      }, {
        'active': 1,
        'name': 'afterGetList',
        'className': 'Vertex\\Tax\\Model\\Plugin\\OrderRepositoryPlugin',
        'line': 82,
        'file': '\/vendor\/vertex\/module-tax\/Model\/Plugin\/OrderRepositoryPlugin.php',
        'origin': {
          'name': 'getList',
          'className': 'Magento\\Sales\\Api\\OrderRepositoryInterface',
          'line': 29,
          'file': '\/vendor\/magento\/module-sales\/Api\/OrderRepositoryInterface.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterGet',
        'className': 'Vertex\\Tax\\Model\\Plugin\\CreditmemoRepositoryPlugin',
        'line': 53,
        'file': '\/vendor\/vertex\/module-tax\/Model\/Plugin\/CreditmemoRepositoryPlugin.php',
        'origin': {
          'name': 'get',
          'className': 'Magento\\Sales\\Api\\CreditmemoRepositoryInterface',
          'line': 37,
          'file': '\/vendor\/magento\/module-sales\/Api\/CreditmemoRepositoryInterface.php'
        }
      }, {
        'active': 1,
        'name': 'afterGetList',
        'className': 'Vertex\\Tax\\Model\\Plugin\\CreditmemoRepositoryPlugin',
        'line': 83,
        'file': '\/vendor\/vertex\/module-tax\/Model\/Plugin\/CreditmemoRepositoryPlugin.php',
        'origin': {
          'name': 'getList',
          'className': 'Magento\\Sales\\Api\\CreditmemoRepositoryInterface',
          'line': 29,
          'file': '\/vendor\/magento\/module-sales\/Api\/CreditmemoRepositoryInterface.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterGet',
        'className': 'Vertex\\Tax\\Model\\Plugin\\InvoiceRepositoryPlugin',
        'line': 52,
        'file': '\/vendor\/vertex\/module-tax\/Model\/Plugin\/InvoiceRepositoryPlugin.php',
        'origin': {
          'name': 'get',
          'className': 'Magento\\Sales\\Api\\InvoiceRepositoryInterface',
          'line': 42,
          'file': '\/vendor\/magento\/module-sales\/Api\/InvoiceRepositoryInterface.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterSavePaymentInformationAndPlaceOrder',
        'className': 'Vertex\\Tax\\Model\\Plugin\\GuestPaymentInformationManagementPlugin',
        'line': 39,
        'file': '\/vendor\/vertex\/module-tax\/Model\/Plugin\/GuestPaymentInformationManagementPlugin.php',
        'origin': {
          'name': 'savePaymentInformationAndPlaceOrder',
          'className': 'Magento\\Checkout\\Api\\GuestPaymentInformationManagementInterface',
          'line': 25,
          'file': '\/vendor\/magento\/module-checkout\/Api\/GuestPaymentInformationManagementInterface.php'
        }
      }]
    }, {
      'around': [{
        'active': 1,
        'name': 'aroundSetData',
        'className': 'Vertex\\Tax\\Model\\Plugin\\GroupPlugin',
        'line': 48,
        'file': '\/vendor\/vertex\/module-tax\/Model\/Plugin\/GroupPlugin.php',
        'origin': {
          'name': 'setData',
          'className': 'Magento\\Config\\Model\\Config\\Structure\\Element\\Group',
          'line': 45,
          'file': '\/vendor\/magento\/module-config\/Model\/Config\/Structure\/Element\/Group.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterGetData',
        'className': 'Vertex\\Tax\\Model\\Plugin\\CustomerDataProviderPlugin',
        'line': 45,
        'file': '\/vendor\/vertex\/module-tax\/Model\/Plugin\/CustomerDataProviderPlugin.php',
        'origin': {
          'name': 'getData',
          'className': 'Magento\\Customer\\Model\\Customer\\DataProvider',
          'line': 214,
          'file': '\/vendor\/magento\/module-customer\/Model\/Customer\/DataProvider.php'
        }
      }]
    }, {
      'after': [{
        'active': 1,
        'name': 'afterGetData',
        'className': 'Vertex\\Tax\\Model\\Plugin\\CustomerDataProviderPlugin',
        'line': 45,
        'file': '\/vendor\/vertex\/module-tax\/Model\/Plugin\/CustomerDataProviderPlugin.php',
        'origin': {
          'name': 'getData',
          'className': 'Magento\\Customer\\Model\\Customer\\DataProviderWithDefaultAddresses',
          'line': 114,
          'file': '\/vendor\/magento\/module-customer\/Model\/Customer\/DataProviderWithDefaultAddresses.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeExecute',
        'className': 'Vertex\\Tax\\Model\\Plugin\\MultishippingErrorMessageSupport',
        'line': 43,
        'file': '\/vendor\/vertex\/module-tax\/Model\/Plugin\/MultishippingErrorMessageSupport.php',
        'origin': {
          'name': 'execute',
          'className': 'Magento\\Multishipping\\Controller\\Checkout\\AddressesPost',
          'line': 18,
          'file': '\/vendor\/magento\/module-multishipping\/Controller\/Checkout\/AddressesPost.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeExecute',
        'className': 'Vertex\\Tax\\Model\\Plugin\\MultishippingErrorMessageSupport',
        'line': 43,
        'file': '\/vendor\/vertex\/module-tax\/Model\/Plugin\/MultishippingErrorMessageSupport.php',
        'origin': {
          'name': 'execute',
          'className': 'Magento\\Multishipping\\Controller\\Checkout\\ShippingPost',
          'line': 16,
          'file': '\/vendor\/magento\/module-multishipping\/Controller\/Checkout\/ShippingPost.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeExecute',
        'className': 'Vertex\\Tax\\Model\\Plugin\\MultishippingErrorMessageSupport',
        'line': 43,
        'file': '\/vendor\/vertex\/module-tax\/Model\/Plugin\/MultishippingErrorMessageSupport.php',
        'origin': {
          'name': 'execute',
          'className': 'Magento\\Multishipping\\Controller\\Checkout\\Overview',
          'line': 21,
          'file': '\/vendor\/magento\/module-multishipping\/Controller\/Checkout\/Overview.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeExecute',
        'className': 'Vertex\\Tax\\Model\\Plugin\\MultishippingErrorMessageSupport',
        'line': 43,
        'file': '\/vendor\/vertex\/module-tax\/Model\/Plugin\/MultishippingErrorMessageSupport.php',
        'origin': {
          'name': 'execute',
          'className': 'Magento\\Multishipping\\Controller\\Checkout\\OverviewPost',
          'line': 80,
          'file': '\/vendor\/magento\/module-multishipping\/Controller\/Checkout\/OverviewPost.php'
        }
      }]
    }],
    'Yotpo_Yotpo': [{
      'around': [{
        'active': 1,
        'name': 'aroundGetReviewsSummaryHtml',
        'className': 'Yotpo\\Yotpo\\Plugin\\Catalog\\Block\\Product\\ListProduct',
        'line': 24,
        'file': '\/vendor\/yotpo\/magento2-module-yotpo-reviews\/Plugin\/Catalog\/Block\/Product\/ListProduct.php',
        'origin': {
          'name': 'getReviewsSummaryHtml',
          'className': 'Magento\\Catalog\\Block\\Product\\ListProduct',
          'line': 216,
          'file': '\/vendor\/magento\/module-catalog\/Block\/Product\/ListProduct.php'
        }
      }]
    }, {
      'around': [{
        'active': 1,
        'name': 'aroundGetReviewsSummaryHtml',
        'className': 'Yotpo\\Yotpo\\Plugin\\Review\\Block\\Product\\ReviewRenderer',
        'line': 24,
        'file': '\/vendor\/yotpo\/magento2-module-yotpo-reviews\/Plugin\/Review\/Block\/Product\/ReviewRenderer.php',
        'origin': {
          'name': 'getReviewsSummaryHtml',
          'className': 'Magento\\Review\\Block\\Product\\ReviewRenderer',
          'line': 86,
          'file': '\/vendor\/magento\/module-review\/Block\/Product\/ReviewRenderer.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeToHtml',
        'className': 'Yotpo\\Yotpo\\Plugin\\Catalog\\Block\\Product\\View\\Details',
        'line': 29,
        'file': '\/vendor\/yotpo\/magento2-module-yotpo-reviews\/Plugin\/Catalog\/Block\/Product\/View\/Details.php',
        'origin': {
          'name': 'toHtml',
          'className': 'Magento\\Catalog\\Block\\Product\\View\\Details',
          'line': 661,
          'file': '\/vendor\/magento\/module-catalog\/Block\/Product\/View\/Details.php'
        }
      }]
    }, {
      'before': [{
        'active': 1,
        'name': 'beforeToHtml',
        'className': 'Yotpo\\Yotpo\\Plugin\\Backend\\Block\\Dashboard\\Grids',
        'line': 15,
        'file': '\/vendor\/yotpo\/magento2-module-yotpo-reviews\/Plugin\/Backend\/Block\/Dashboard\/Grids.php',
        'origin': {
          'name': 'toHtml',
          'className': 'Magento\\Backend\\Block\\Dashboard\\Grids',
          'line': 661,
          'file': '\/vendor\/magento\/module-backend\/Block\/Dashboard\/Grids.php'
        }
      }]
    }]
  }, 'totals': 695
}

export default fakePlugins;
