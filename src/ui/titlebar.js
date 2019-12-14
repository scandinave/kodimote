#!/usr/bin/gjs
/* titlebar.js
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


var Titlebar = GObject.registerClass({
    GTypeName: 'Titlebar',
    Template: 'resource:///info/scandi/kodimote/ui/titlebar.ui',
    InternalChildren: [
        'sidebarHeader',
        'mainHeader'
    ],
    Properties: {
    },
    Signals: {
    }
}, class Titlebar extends Handy.TitleBar {

  _init(params) {
    super._init(params);
  }

  on_menu_clicked() {
  }

  get sidebarHeader() {
    return this._sidebarHeader;
  }

  get mainHeader() {
    return this._mainHeader;
  }

});



