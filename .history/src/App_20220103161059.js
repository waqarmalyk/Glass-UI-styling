import React from "react";

function App() {
  return (
    <>
      <div class="container">
        <div class="avatar">
          <a href="https://codepen.io/MarioDesigns/">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/751678/skytsunami.png"
              alt="Skytsunami"
            />
          </a>
        </div>
        <div class="content">
          <h1>Floating CSS animation</h1>
          <p>Follow me on:</p>
          <p>
            <span>
              <a href="https://twitter.com/MDesignsuk" target="_blank">
                <i class="fa fa-twitter"></i>
              </a>
            </span>
            <span>
              <a href="https://github.com/Mario-Duarte/" target="_blank">
                <i class="fa fa-github"></i>
              </a>
            </span>
            <span>
              <a href="https://bitbucket.org/Mario_Duarte/" target="_blank">
                <i class="fa fa-bitbucket"></i>
              </a>
            </span>
            <span>
              <a href="https://codepen.io/MarioDesigns/" target="_blank">
                <i class="fa fa-codepen"></i>
              </a>
            </span>
          </p>
          <p>BY: Mario Duarte</p>
        </div>
      </div>

      <a
        class="suppoprt-me"
        href="https://www.buymeacoffee.com/marioduarte"
        target="_blank"
      >
        <img src="https://img.buymeacoffee.com/button-api/?text=Buy me a Coffee&nbsp&emoji=&slug=marioduarte&button_colour=FF5F5F&font_colour=ffffff&font_family=Cookie&outline_colour=000000&coffee_colour=FFDD00" />
      </a>
    </>
  );
}

export default App;
