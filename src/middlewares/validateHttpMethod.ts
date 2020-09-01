export default (allowedMethod: string) => (req: any, res: any, next: any) => {
    if (allowedMethod !== req.method) {
        return res.status(405).json({
            error: 'Method not allowed'
        })
    }
    next()
}
