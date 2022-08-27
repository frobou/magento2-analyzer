import {Component, OnInit} from '@angular/core';
import {ConfigService} from '../../../services/config.service';
import {environment} from "../../../../environments/environment";
import fakeConfig from "../../../fake/config";

@Component({
  selector: 'app-file-headers',
  templateUrl: './file-headers.component.html',
  styleUrls: ['./file-headers.component.scss']
})
export class FileHeadersComponent implements OnInit {
  private html: string;
  private xml: string;
  private php: string;

  comments: { language: string, comment: string }[] = [];

  constructor(private configService: ConfigService) {
  }

  ngOnInit(): void {
    if (environment.production) {
      this.populateComments(this.configService.config.persona);
    } else {
      this.populateComments(fakeConfig.persona);
    }
    this.comments = [
      {language: 'PHP', comment: this.php},
      {language: 'HTML', comment: this.xml},
      {language: 'XML', comment: this.xml},
    ];
  }

  private populateComments(persona: {
    vendor: string, author: string, email: string}) {
    this.html = `<!--
/**
 * Copyright © ${persona.vendor}. All rights reserved.
 * @author ${persona.author} <${persona.email}>
 */
-->`;

    this.php = `<?php
/**
 * Copyright © ${persona.vendor}. All rights reserved.
 * @author ${persona.author} <${persona.email}>
 */
declare(strict_types=1);`;

    this.xml = `<!--
/**
 * Copyright © ${persona.vendor}. All rights reserved.
 * @author ${persona.author} <${persona.email}>
 */
-->`;
  }

}
