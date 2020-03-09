# VUE_IPHONE_SIMULATION_VIEW

Demo message:
<img src='./img/1583488341886.jpg'>

1.Custom Content(slot element):

        <iphone-simulation-view>
        <div><h1>Hello</h1></div>
        </iphone-simulation-view>


2.Message : 

    html:

        <iphone-simulation-view contentType="message" :messagesData="messagesData"></iphone-simulation-view>

    script:

        <script>
            import IphoneSimulationView from "iphone-simulation-view";
            export default {
            components: {
                IphoneSimulationView
            },
            data: () => ({
            messagesData:[
                {
                user: "manager",
                text:
                    "Hello",
                img:
                    "image url..."
                },
                { user: "customer", text: "Hello", img: "" }
                ]
            })
            };
            </script>

        

