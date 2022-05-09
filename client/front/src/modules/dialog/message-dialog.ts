import { openDialog } from './hooks/dialog.hook'
import MessageDialog from './components/MessageDialog.vue'

export const openMessageDialog = (title: string, paragraphs: string[]) => {
  openDialog(MessageDialog, { title, paragraphs })
}
