import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'child-info',
    templateUrl: './child.component.html'
})
export class ChildComponent {
    ChildTitle = 'Child Details';

    @Input() ParentInput: string;

    @Output() notify: EventEmitter<string> = new EventEmitter<string>();

    onClick() {
        this.notify.emit('Click from nested component');
    }
}