import { writable } from 'svelte/store';

type LogMessageType = 'info' | 'warning' | 'error';

interface LogMessage {
    title: string;
    message: string;
    // TODO make optional and add current timestamp if omitted
    timestamp: Date;
    type: LogMessageType;
    developmentOnly?: boolean;
}

function createLogStore() {
    const { subscribe, update, set } = writable<Array<LogMessage>>([]);

    return {
        subscribe,
        add: (message: LogMessage) =>
            update(($) => {
                $.push(message);
                return $;
            }),
        addError: (error: Omit<LogMessage, 'type'>) =>
            update(($) => {
                $.push({ ...error, type: 'error' });
                return $;
            }),
        addWarning: (warning: Omit<LogMessage, 'type'>) =>
            update(($) => {
                $.push({ ...warning, type: 'warning' });
                return $;
            }),
        addInfo: (info: Omit<LogMessage, 'type'>) =>
            update(($) => {
                $.push({ ...info, type: 'info' });
                return $;
            }),
        clear: (type?: LogMessageType) => {
            if (type) {
                update(($) => {
                    $ = $.filter((mes) => mes.type !== type);
                    return $;
                });
            }

            set([]);
        },
    };
}

function createLogStateStore() {
    const { subscribe, update } = writable(false);

    return {
        subscribe,
        toggle: () => update(($) => !$),
    };
}

export const log = createLogStore();
export const logState = createLogStateStore();
