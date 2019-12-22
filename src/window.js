#!/usr/bin/gjs
/* window.js
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

var { GObject, Gtk } = imports.gi;
var { Titlebar } = imports.ui.titlebar;
var { Content } = imports.ui.content;


var KodimoteWindow = GObject.registerClass({
    GTypeName: 'KodimoteWindow',
    Template: 'resource:///info/scandi/kodimote/window.ui'
}, class KodimoteWindow extends Gtk.ApplicationWindow {
    _init(application) {
        super._init({ application });
        const titlebar = new Titlebar();
        this.set_titlebar(titlebar);
        const content = new Content()
        this.add(content);

        const headerGroup = new Gtk.SizeGroup();
        headerGroup.set_mode(Gtk.SizeGroupMode.HORIZONTAL);
        headerGroup.add_widget(titlebar.sidebarHeader);
        headerGroup.add_widget(content.sidebarMenu);

        const contentGroup = new Gtk.SizeGroup();
        contentGroup.set_mode(Gtk.SizeGroupMode.HORIZONTAL);
        contentGroup.add_widget(titlebar.mainHeader);
        contentGroup.add_widget(content.stackContent);

    }
});
