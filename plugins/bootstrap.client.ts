import { Modal, Dropdown, Collapse, Tooltip, Popover } from 'bootstrap';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
export default defineNuxtPlugin(() => {
  // جعل Bootstrap متاح عالمياً
  return {
    provide: {
      bootstrap: {
        Modal,
        Dropdown,
        Collapse,
        Tooltip,
        Popover
      }
    }
  }
})