import {configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

setOptionsNode()

configure({ adapter: new Adapter() })

function setOptionsNode() {
    const optionsNode = window.document.createElement('script')
    optionsNode.id = 'options'
    optionsNode.type = 'application/json'
    optionsNode.innerText = JSON.stringify({ noSSO: false })
    window.document.body.appendChild(optionsNode)
}
