import {Directive, HostListener, HostBinding} from "@angular/core";

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective{
  @HostBinding('class.open') isOpen = false; // binding to class ()array of classes

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }
}
