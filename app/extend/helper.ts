const ioFormat = (action: string, data: any = {}, metadata: object = {}) => {
    const meta = Object.assign({}, {
        timestamp: Date.now(),
    }, metadata);

    return {
        meta,
        data: {
            action,
            data,
        },
    };
}

export {
    ioFormat,
};