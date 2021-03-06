import { QDialog } from '../components/dialog'
import modalFn from '../utils/modal-fn'

export default {
  install ({ $q, Vue }) {
    if (this.__installed) { return }
    this.__installed = true

    this.create = $q.dialog = modalFn(QDialog, Vue)
  }
}
