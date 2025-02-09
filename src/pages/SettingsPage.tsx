import React, { useCallback, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAlliance, useAutoAssignTeams, useAutoIncrementMatches, useCompName, useCompNames, useData, useFieldFlipped, useHaveTeams, useLocalData, useRobot, useTeams } from '../data'
import { useRegisterSW } from 'virtual:pwa-register/react'
import PlusMinus from '../components/PlusMinus'

const fetcher = async (url: string) => {
    return fetch(url,
        {
            method: 'GET',
            headers: {
                'X-TBA-Auth-Key': `${import.meta.env.VITE_TBA_KEY}`
            }
        }
    ).then(res => res.json())
}

export default function SettingsPage() {
    const [compNames, setCompNames] = useCompNames()
    const [autoIncrementMatches, setAutoIncrementMatches] = useAutoIncrementMatches()
    const [usingLocalData, setUsingLocalData] = useLocalData()
    const [autoAssignTeams, setAutoAssignTeams] = useAutoAssignTeams()
    const [data, setData] = useData()
    const haveTeams = useHaveTeams()
    const [teams, setTeams] = useTeams()
    const [robot, setRobot] = useRobot()
    const navigate = useNavigate()
    const { updateServiceWorker } = useRegisterSW()
    const [compName, setCompName] = useCompName()
    const [fieldFlipped, setFieldFlipped] = useFieldFlipped()

    useEffect(() => {
        if (autoIncrementMatches && data.matchNum == '') {
            setData(prev => {
                return { ...prev, matchNum: 1 }
            })
        }
        if (autoAssignTeams && data.teamNum == '') {
            setData(prev => {
                const matchNum = prev.matchNum || 1
                return { ...prev, teamNum: teams[matchNum][robot] }
            })
        }
    }, [autoAssignTeams, autoIncrementMatches])

    const resetCount = () => {
        if (confirm('Reset match count?')) {
            setData({ ...data, matchNum: 1, teamNum: autoAssignTeams ? teams[0][robot] : '' })
        }
    }

    const setComp = useCallback(async (key: string) => {
        if (!navigator.onLine) return alert('You are not connected to the internet')

        if (confirm('Download the competition data?')) {
            setCompName(key)
            const matchesData: any[] = await fetcher(`https://www.thebluealliance.com/api/v3/event/${key}/matches`)
            const simplified = matchesData.filter(({ key }) => key.includes('qm'))
                .sort((a, b) => a?.match_number! - b?.match_number!)
                .map(({ alliances, match_number, key: matchKey }: { alliances: any, match_number: number, key: string }) => {
                    if (!matchKey.includes('qm')) return null
                    else return { match_number, teams: [...alliances.red.team_keys, ...alliances.blue.team_keys] }
                }).map(d => d?.teams.map((team: string) => team.replace('frc', '')))
            setTeams(simplified as any as number[][])
        }
    }, [])

    const downloadCompNames = useCallback(async () => {
        if (!navigator.onLine) return alert('You are not connected to the internet')

        if (confirm('Download the competition names?')) {
            const data = await fetcher('https://www.thebluealliance.com/api/v3/team/frc2590/events/2024') as any[]
            const simplified = data.map(({ name, key }) => {
                return { name, key }
            })
            setCompNames(simplified)
        }
    }, [])

    const handleLocalData = useCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (confirm('Using this file will overwrite any previously stored match schedule. Are you sure you want to continue?')) {
            const file = e.target.files?.[0]
            const reader = new FileReader()

            reader.onload = (e) => {
                try {
                    setTeams(JSON.parse(e.target?.result as string) as number[][])
                } catch (e) {
                    console.log(e)
                }
            }

            reader.readAsText(file!)
        }
    }, [])

    const clearLocalStorage = () => {
        if (confirm('Clear local storage?')) {
            localStorage.clear()
            navigate('/')
        }
    }

    const resetPastData = () => {
        if (confirm('Reset past data?')) localStorage.removeItem('nemesis-past-data')
    }

    const updateApp = () => {
        if (confirm('Update service worker?')) updateServiceWorker(true)
    }

    const incrementMatchNum = () => {
        setData(prev => {
            return { ...prev, matchNum: Number(prev.matchNum) + 1 }
        })
    }

    const decrementMatchNum = () => {
        setData(prev => {
            return { ...prev, matchNum: Number(prev.matchNum) > 1 ? Number(prev.matchNum) - 1 : 1 }
        })
    }

    return (
        <>
            <div className='ms-2 mt-1'>
                <Link to='/' className='text-decoration-none'> &#8592; Back</Link>
            </div>
            <div className='d-flex justify-content-center align-items-center' style={{ minHeight: 'calc(100vh - 28px)' }}>
                <div className='card mx-auto' style={{ width: 376 }}>
                    <div className='card-body'>
                        <div>
                            <p>Window Height: {window.innerHeight}</p>
                            <p>Window Width: {window.innerWidth}</p>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <button className='btn btn-tertiary mb-3' onClick={resetCount}>Reset Match Count</button>
                            <button className='btn btn-tertiary mb-3' onClick={clearLocalStorage}>Clear Local Storage</button>
                        </div>
                        <div className='d-flex justify-content-evenly'>
                            <button className='btn btn-tertiary mb-3' onClick={resetPastData}>Reset Past Data</button>
                            <button className='btn btn-tertiary mb-3' onClick={updateApp}>Update SW</button>
                        </div>
                        <div className='d-flex flex-row align-items-baseline justify-content-center gap-3'>
                            <p>Match Number: {data.matchNum}</p>
                            <div className='btn-group'>
                                <button className='btn btn-tertiary btn-lg' onClick={decrementMatchNum}>-</button>
                                <button className='btn btn-tertiary btn-lg' onClick={incrementMatchNum}>+</button>
                            </div>
                        </div>
                        <div className='form-check form-switch d-flex align-items-center gap-2 mb-3'>
                            <input className='form-check-input' type='checkbox' role='switch' id='field-flipped' checked={fieldFlipped} onChange={e => setFieldFlipped(Boolean(e.target.checked))} />
                            <label className='form-check-label' htmlFor='field-flipped'>Flip field</label>
                        </div>
                        <div className='form-check form-switch d-flex align-items-center gap-2 mb-3'>
                            <input className='form-check-input' type='checkbox' role='switch' id='auto-increment' checked={autoIncrementMatches} onChange={e => {
                                if (e.target.checked) setAutoIncrementMatches(e.target.checked)
                                else {
                                    setAutoAssignTeams(false)
                                    setAutoIncrementMatches(false)
                                }
                            }} />
                            <label className='form-check-label' htmlFor='auto-increment'>Auto Increment Matches</label>
                        </div>
                        <div className='form-check form-switch d-flex align-items-center gap-2 mb-3'>
                            <input className='form-check-input' type='checkbox' role='switch' id='use-local' checked={usingLocalData} onChange={e => setUsingLocalData(Boolean(e.target.checked))} />
                            <label className='form-check-label' htmlFor='use-local'>Use Local Data</label>
                        </div>
                        {compNames.length == 0 && !usingLocalData && (
                            <div className='text-center'>
                                <button className='btn btn-tertiary' onClick={downloadCompNames}>Download Competition Names</button>
                            </div>
                        )}
                        {(compNames.length != 0 || usingLocalData) && (
                            <>
                                {haveTeams && (
                                    <div className='form-check form-switch d-flex align-items-center gap-2 mb-3'>
                                        <input className='form-check-input' type='checkbox' role='switch' id='auto-assign' checked={autoAssignTeams} onChange={e => {
                                            setAutoAssignTeams(e.target.checked)
                                            if (e.target.checked) setAutoIncrementMatches(true)
                                        }} />
                                        <label className='form-check-label' htmlFor='auto-assign'>Auto Assign Teams</label>
                                    </div>
                                )}
                                {!usingLocalData && compNames != null && (
                                    <div className='input-group mb-3'>
                                        <label className='input-group-text' htmlFor='comp-select'>Comp</label>
                                        <select className='form-select' aria-label='Select Competition' id='comp-select' defaultValue={compName} onChange={e => setComp(e.target.value)}>
                                            <option selected>Select Competition</option>
                                            {compNames.map(({ name, key }: { name: string, key: string }) => {
                                                return (
                                                    <option value={key}>{name}</option>
                                                )
                                            })}
                                        </select>
                                    </div>
                                )}
                                {usingLocalData && (
                                    <input className='form-control mb-3' type='file' onChange={handleLocalData} />
                                )}
                                {haveTeams && (
                                    <div className='input-group'>
                                        <label htmlFor='robot-select' className='input-group-text'>Robot</label>
                                        <select className='form-select' id='robot-select' aria-label='Select Robot' defaultValue={robot} style={{ width: 'fit-content' }} onChange={e => setRobot(Number(e.target.value))}>
                                            <option selected>Select Robot</option>
                                            <option value={0}>Red Robot 1</option>
                                            <option value={1}>Red Robot 2</option>
                                            <option value={2}>Red Robot 3</option>
                                            <option value={3}>Blue Robot 1</option>
                                            <option value={4}>Blue Robot 2</option>
                                            <option value={5}>Blue Robot 3</option>
                                        </select>
                                    </div>
                                )}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}
