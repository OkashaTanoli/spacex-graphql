import { shallow, ShallowWrapper } from 'enzyme'
import Main from './main'


describe('Main Component Test', () => {
    let component: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;
    beforeEach(() => {
        component = shallow(<Main />)
    })
    it('Should Test main_div', () => {
        expect(component.find('.main_div').length).toBe(1)
    })

    it('Should Render header', () => {
        expect(component.find('.header').length).toBe(1)
    })
    it('Should render banner div', () => {
        expect(component.find('.banner_div').length).toBe(1)
    })
    it('Should render LaunchComponent',()=>{
        expect(component.find('LaunchComponent')).toHaveLength(1)
    })
    it("Should render copy_right",()=>{
        expect(component.find('.copy_right').length).toBe(1)
    })
})