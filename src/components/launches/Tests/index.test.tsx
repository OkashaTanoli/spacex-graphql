import { shallow, ShallowWrapper } from 'enzyme'
import LaunchComponent from '../index'

describe("Index File Test", () => {
    let component: ShallowWrapper<{}, {}, React.Component<{}, {}, any>>;
    beforeEach(() => {
        component = shallow(<LaunchComponent />)
    })
    it("Should render launches", () => {
        expect(component.find('.launches')).toHaveLength(1)
    })
    it("Should render h1 tag", () => {
        expect(component.find('h1').length).toBe(1)
    })

    it("Should render mission_slider", () => {
        expect(component.find('.mission_slider').length).toBe(1)
        expect(component.find('Launches').length).toBe(1)
        expect(component.find('Indlaunches').length).toBe(1)
    })
})