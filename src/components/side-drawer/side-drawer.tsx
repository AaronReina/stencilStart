import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'uc-side-drawer',
  styleUrl: './side-drawer.css',
  shadow: true,
})
export class SideDrawer {
  @Prop({ reflect: true }) title: string;
  @Prop({ reflect: true, mutable:true }) open: boolean;

  switchSide() {
    this.open? this.open= false:this.open = true
  }

 

  render() {
    return (
      <div>
        {this.open ? (
          <aside>
            <h1>{this.title} </h1> <slot />
            <button onClick={this.switchSide.bind(this)} class="button">
              X
            </button>
          </aside>
        ):<button onClick={this.switchSide.bind(this)} class="button">
        open
      </button>}
        
      </div>
    );
  }
}
