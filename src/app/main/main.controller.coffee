angular.module "matt"
  .controller "MainController", ($timeout) ->
    vm = this
    vm.codesample = "<h2>Hello!</h2>
    <p>I didn't wrote anything yet, because i need to choose my Backend API yet :3 but... look! Syntax highlighting is already working! yay</p>
    <pre
      class='language-ruby'
      data-jsonp='https://api.github.com/gists/aff67cd65f4f0e1ddae5'
      data-filename='devise_sessions_controller.rb'>
    </pre>
    <p> There will be tons of how-to's, code snippets, and nerd stuff soon. </p>
    "

    activate = ->
      $timeout (->
        Prism.highlightAll()
        Prism.plugins.jsonphighlight.highlight()
        return
      ), 1000
      return

    activate()
    return
