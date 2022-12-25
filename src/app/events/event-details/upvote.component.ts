import { Component, EventEmitter, Input, Output } from "@angular/core";
@Component({
  selector: "upvote",
  template: `
    <div class="votingWidgetContainer pointable" (click)="onClick()">
      <div class="well votingWidget">
        <div class="votingButton">
          <i class="glyphicon glyphicon-heart" [style.color]="iconColor"></i>
        </div>
        <div class="badge badge-inverse votingCount">
          <div>{{ count }}</div>
        </div>
      </div>
    </div>
  `,
})
export class UpVoteComponent {
  @Input() count: number | any;
  @Input() set voted(val: any) {
    this.iconColor = val ? "red" : "white";
  }
  @Output() vote = new EventEmitter();
  iconColor: string | any;

  onClick() {
    this.vote.emit({});
  }
}
