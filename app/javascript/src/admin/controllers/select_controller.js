// Boostrap requires jQuery
// Our use of it here is simply because its already a dependency
// The verbose use of the `jQuery` variable instead of `$` is intentional so its use is easier to identify
import jQuery from 'jquery';
import 'select2';
import { Controller } from 'stimulus';

export default class extends Controller {
  connect() {
    jQuery(this.element).select2({ theme: 'bootstrap' });
  }
}