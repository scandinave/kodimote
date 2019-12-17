const { GObject, GLib } = imports.gi;

class Networks {

    constructor() {
    }

    /**
    * Send wakeonlan signal by invoking bash command for the given macAddress
    */
    static wakeOnLan(macAddress) {
        const WOL_PORT = 9;
        try {
            Glib.spawn_command_line_async(`echo -e $(echo
            $(printf 'f%.0s' {1..12}; printf "$(echo ${macAddress}
            | sed 's/://g')%.0s"
            {1..16}) | sed -e 's/../\\x&/g')
            | nc -w1 -u -b 255.255.255.255 ${WOL_PORT})`
        } catch (e) {
            throw new Error(`Can not send wol signal: ${e}`);
        }
    }
}
