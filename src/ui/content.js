#!/usr/bin/gjs
/* content.js
 *
 * Copyright 2019 scandinave
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
const { GObject, Handy } = imports.gi;
var { Hosts } = imports.ui.hosts.hosts;

var Content = GObject.registerClass({
    GTypeName: 'Content',
    Template: 'resource:///info/scandi/kodimote/ui/content.ui',
    InternalChildren: [
        'sidebarMenu',
        'stackContent'
    ],
    Properties: {
    },
    Signals: {
    }
}, class Content extends Handy.Leaflet {

  _init(params) {
    super._init(params);
    this._stackContent.add(new Hosts());
  }

  get sidebarMenu() {
    return this._sidebarMenu;
  }

  get stackContent() {
    return this._stackContent;
  }
});

