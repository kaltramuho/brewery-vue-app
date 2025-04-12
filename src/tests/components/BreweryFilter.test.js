import { mount } from '@vue/test-utils';
import BreweryFilter from '../../components/BreweryFilter.vue';

describe('BreweryFilter.vue', () => {
  it('renders input and select fields', () => {
    const wrapper = mount(BreweryFilter);

    const input = wrapper.get('input');
    const select = wrapper.get('select');

    expect(input.exists()).toBe(true);
    expect(select.exists()).toBe(true);
  });

  it('emits filter values when button is clicked', async () => {
    const wrapper = mount(BreweryFilter);
    const nameInput = wrapper.get('input');
    const typeSelect = wrapper.get('select');
    const button = wrapper.get('button');

    await nameInput.setValue('Dog');
    await typeSelect.setValue('micro');
    await button.trigger('click');

    const emitted = wrapper.emitted('apply-filter');
    expect(emitted).toBeTruthy();
    expect(emitted[0][0]).toEqual({ name: 'Dog', type: 'micro' });
  });
});