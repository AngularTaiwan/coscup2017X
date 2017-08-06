import {
  Directive,
  ElementRef,
  Input,
  HostBinding,
  Output,
  EventEmitter,
  OnInit
} from "@angular/core";

@Directive({
  selector: '.appTodoDone,[appTodoDone]'
})
export class TodoDoneDirective implements OnInit  {
  @Input() @HostBinding('class.completed') data:boolean;
  @Output() onStatusChange = new EventEmitter();

  constructor(private el:ElementRef) { 
    //this.onStatusChange.emit('hi');
    //this.el.nativeElement.classList.add('completed');
  }

  ngOnInit(){
    this.onStatusChange.emit('hi');
  }

}
