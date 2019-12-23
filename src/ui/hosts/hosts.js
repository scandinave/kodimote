#!/usr/bin/gjs
/* hosts.js
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
const { GObject, Gtk, Handy } = imports.gi;
const { HostsItem } = imports.ui.hosts.hostsItem;

var Hosts = GObject.registerClass({
    GTypeName: 'Hosts',
    Template: 'resource:///info/scandi/kodimote/ui/hosts/hosts.ui',
    InternalChildren: [
        'HostsList'
    ],
}, class Hosts extends Gtk.Box {

    _init(params) {
        super._init(params);

        const item1 = new HostsItem();
        item1.title = "Kodi Home";
        item1.subtitle = "192.168.1.10";


        const item2 = new HostsItem();
        item2.title = "Another Kodi";
        item2.subtitle = "192.168.1.12";

        this._HostsList.add(item1);
        this._HostsList.add(item2);
    }

    edit(row) {
        log(row.title);
    }
});

