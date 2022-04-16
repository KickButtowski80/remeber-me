import { createApp } from 'vue';
import App from './App.vue'
import BaseCard from './components/UI/BaseCard.vue'
import BaseButton from './components/UI/BaseButton.vue'
import DeleteIcon from './components/Icons/DeleteIcon.vue'
import BaseDialog from './components/UI/BaseDialog.vue'
import BaseForm from './components/UI/BaseForm.vue'
import EditIcon from './components/Icons/EditIcon.vue'

const app = createApp(App)
app.component('base-card', BaseCard)
app.component('base-button', BaseButton)
app.component('edit-icon', EditIcon)
app.component('delete-icon', DeleteIcon)
app.component('base-dialog', BaseDialog)
app.component('base-form', BaseForm)
app.mount('#app');

