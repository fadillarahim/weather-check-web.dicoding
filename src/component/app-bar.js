class Appbar extends HTMLElement{
    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        this.shadowDOM.innerHTML = `
        <style>
            .header-nav{
                background-color: #25316D;
                padding: 10px;
                height: 50px;
                display: fles;
                justify-content: center;
                align-items: center;
            }
            
            .header-nav .title-nav{
                color: white;
                font-size: 24pt;
                margin: 40px; 
                padding: 20px;
                font-weight: bold;
            }
        </style>

        <nav class="navbar navbar-dark header-nav">
        <div class="container">
          <span class="navbar-text title-nav">
            WeatherCheck Web
          </span>
        </div>
        </nav>
        `;
    }
}

customElements.define("app-bar", Appbar);