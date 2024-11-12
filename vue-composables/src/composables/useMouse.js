import {ref } from 'vue';
import { useEventListener } from './useEvent';

function useMouse() {
    const x = ref(0)
    const y = ref(0)
    useEventListener(window, 'mousemove', (event) => {
        x.value = event.pageX
        y.value = event.pageY
    })
    //return composable values;it can be variables,functions,objects
    return {
        x,
        y
    }
}
export { useMouse }