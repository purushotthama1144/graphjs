import { Component, Inject, OnInit, Optional, ViewChild, ViewContainerRef } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import grapesjs from 'grapesjs';
import 'grapesjs-preset-webpage';

@Component({
  selector: 'app-graphjs',
  templateUrl: './graphjs.component.html',
  styleUrls: ['./graphjs.component.scss']
})
export class GraphjsComponent implements OnInit {
  enableActionButtons: boolean = false;
  public editor:any = null
  constructor(private router: Router, @Optional() @Inject(MAT_DIALOG_DATA) public data: any) {

  }

  ngOnInit(): void {
    if (this.router.url == '/') {
      this.enableActionButtons = true;
    }
    if (this.data) {
      this.enableActionButtons = false;
    }

    this.editor =  grapesjs.init({
      container: '#gjs',
      autorender: true,
      forceClass: false,
      components: '',
      style: '',
      blockManager: {
        appendTo: '#blocks',
        blocks: [
          {
            id: 'section', // id is mandatory
            label: '<b>Section</b>', // You can use HTML/SVG inside labels
            attributes: { class:'gjs-block-section' },
            content: `<section>
              <h1>This is a simple title</h1>
              <div>This is just a Lorem text: Lorem ipsum dolor sit amet</div>
            </section>`,
          }, {
            id: 'text',
            label: 'Text',
            content: '<div data-gjs-type="text">Insert your text here</div>',
          }, {
            id: 'image',
            label: 'Image',
            // Select the component once it's dropped
            select: true,
            // You can pass components as a JSON instead of a simple HTML string,
            // in this case we also use a defined component type `image`
            content: { type: 'image' },
            // This triggers `active` event on dropped components and the `image`
            // reacts by opening the AssetManager
            activate: true,
          }
        ]
      },
      plugins: ['gjs-preset-webpage'],
      pluginsOpts: {
        'gjs-preset-webpage': {
          navbarOpts: false,
          countdownOpts: false,
          formsOpts: false,
          blocksBasicOpts: {
            blocks: ['link-block', 'quote', 'image', 'video', 'text', 'column1', 'column2', 'column3'],
            flexGrid: false,
            stylePrefix: 'lala-'
          }
        }
      }
    });

    // const editor = grapesjs.init({
    //   container: "#gjs",
    //   fromElement: true,
    //   storageManager: false,
  
    //   layerManager: {
    //     appendTo: '.layers-container'
    //   },
    //   // We define a default panel as a sidebar to contain layers
    //   panels: {
    //     defaults: [
    //       {
    //         id: 'panel-switcher',
    //         el: '.panel__switcher',
    //         buttons: [{
    //             id: 'show-layers',
    //             active: true,
    //             label: 'Layers',
    //             command: 'show-layers',
    //             // Once activated disable the possibility to turn it off
    //             togglable: false,
    //           }, {
    //             id: 'show-style',
    //             active: true,
    //             label: ,
    //             command: 'show-styles',
    //             togglable: false,
    //         }],
    //       },  
    //     {
    //       id: 'layers',
    //       el: '.panel__right',
    //       // Make the panel resizable
    //       resizable: {
    //         maxDim: 350,
    //         minDim: 200,
            
    //         keyWidth: 'flex-basis',
    //       },
    //     }]
    //   },
    //   blockManager: {
    //     appendTo: '#blocks',
    //     blocks: [
    //       {
    //         id: 'section',
    //         label: '<b>Section</b>',
    //         attributes: { class: 'gjs-block-section' },
    //         content: `<section>
    //             <h1>This is a simple title</h1>
    //             <div>This is just a Lorem text: Lorem ipsum dolor sit amet</div>
    //           </section>`,
    //       }, {
    //         id: 'text',
    //         label: 'Text',
    //         content: '<div data-gjs-type="text">Insert your text here</div>',
    //       }, {
    //         id: 'image',
    //         label: 'Image',
    //         select: true,
    //         content: { type: 'image' },
    //         activate: true,
    //       }
    //     ],
  
    //   },
      
    // });
  }
  

}

