interface Info {
    desc: string,
    isActive: boolean
}

interface Tags {
    name: string,
    value: number
}


interface Reply {
    userId: number,
    id: number,
    title: string,
    info:Info,
    tags : Tags[],
}
