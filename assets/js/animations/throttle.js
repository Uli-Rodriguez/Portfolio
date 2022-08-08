/* Limit the amount of calls per second of a given function */

export function throttle(callBack, delay = 250) {
    let shouldWait = false;
    let waitingArgs;
    /* Check if we have a call saved during the waiting period that was not executed, execute it and set the timer to 0 again, else do nothing and allow future executions */
    const waitingFunc = () => {
        if(waitingArgs == null) {
            shouldWait = false;
        } else {
            /* In case we have a call, execute it */
            callBack(...waitingArgs);
            waitingArgs = null;
            setTimeout(waitingFunc, delay);
        }
    }

    return (...args) => {
        /* If we are in the waiting period and we have a call, save the last one */
        if(shouldWait) {
            waitingArgs = args;
            return;
        }

        /* In case we don´t need to wait, execute the given function set the timer */
        callBack(...args);
        shouldWait = true;
        /* Set the timer to the delay given (default 250ms) and wait for checking if we have calls saved */
        setTimeout(waitingFunc, delay)
    }
}