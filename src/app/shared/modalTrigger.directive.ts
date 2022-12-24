import { Directive, OnInit, ElementRef, Inject, Input } from "@angular/core";
import { JQ_TOKEN } from "src/app/shared";

@Directive({
  selector: "[modal-trigger]",
})
export class ModalTriggerDirective implements OnInit {
  @Input("modal-trigger") modalId: string | any;
  private el: HTMLElement | any;

  constructor(ref: ElementRef, @Inject(JQ_TOKEN) private $: any) {
    this.el = ref.nativeElement;
  }

  ngOnInit() {
    this.el.addEventListener("click", (e: any) =>
      this.$(`#${this.modalId}`).modal({})
    );
  }
}
