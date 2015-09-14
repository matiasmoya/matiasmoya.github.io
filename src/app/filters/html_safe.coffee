angular.module "matt"
  .filter "html_safe", ['$sce', ($sce) ->
    (text) ->
      $sce.trustAsHtml text
  ]
