
function findTime({StarTimeUtc,EndTimeUtc}){
    StarTimeUtc=StarTimeUtc.split('T')[1].split(':')
    EndTimeUtc=EndTimeUtc.split('T')[1].split(':')
    let stM= Number(StarTimeUtc[0])*60+Number(StarTimeUtc[1])
    let etM= Number(EndTimeUtc[0])*60+Number(EndTimeUtc[1])
    return etM-stM
    }

    export default findTime