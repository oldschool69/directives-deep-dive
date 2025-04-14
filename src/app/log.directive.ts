import { ElementRef, inject } from '@angular/core';
import { Directive } from '@angular/core';

@Directive({
  selector: '[appLog]',
  standalone: true,
  host: {
    '(click)': 'onLog()'
  }
})
export class LogDirective {

  private elementRef = inject(ElementRef);

  onLog() {
    console.log('CLCKED');
    console.log(this.elementRef.nativeElement);

  }

}
