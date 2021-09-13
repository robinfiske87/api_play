import React, { useState, useEffect } from 'react'
import styles from './RepoPanel.module.css'

import api from "../../services/api"

import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'

const RepoPanel = (props) => {
    // const {view} = props
    const [repoData, setRepoData] = useState(null)
    const [pageList, setPageList] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [numberOfPages, setNumberOfPages] = useState(null)
    const [toggleLoadList, setToggleLoadList] = useState(false)
    const [loader, setLoader] = useState(true)

    // TODO: Get from config file
    const numberPerPage = 20


    // get data from API
    useEffect(() => {
        api
        .getMostUsedGitRepos()
        .then((result) => {
            setRepoData(result.items)
        })
        return()=>{
            setLoader(false)
        }
    }, [])



    // Define total number of pages
    useEffect(() => {
        if(Array.isArray(repoData)){
            setNumberOfPages(Math.ceil(repoData.length / numberPerPage))
        }
    }, [repoData, numberPerPage])

    // create partial list from from API based on pagination variables 
    useEffect(() => {
        let begin = ((currentPage - 1) * numberPerPage)
        let end = begin + numberPerPage
        let newData

        if(Array.isArray(repoData)){
        newData = repoData.slice(begin, end)
        if(newData.length > 0){setPageList(newData)}
        }
        return () => {
            setToggleLoadList(false)
            setLoader(false)
        }
    }, [toggleLoadList, numberOfPages, repoData])

    function nextPage() {
        if(currentPage < numberOfPages){
            setCurrentPage(currentPage+1)
        }
        setToggleLoadList(true)
    }
    function previousPage() {
        if(currentPage > 1){
        setCurrentPage(currentPage-1)
        }
        setToggleLoadList(true)
    }
    function firstPage() {
        setCurrentPage(1)
        setToggleLoadList(true)
    }
    function lastPage() {
        setCurrentPage(numberOfPages)
        setToggleLoadList(true)
    }

    function onChange(e) {
        if(e.target.value >= 1 && e.target.value <= numberOfPages){
            setCurrentPage(e.target.value)
        }
        if(e.target.value < 1){
            setCurrentPage(1)
        }
        if(e.target.value > numberOfPages){
            setCurrentPage(numberOfPages)
        }
        setToggleLoadList(true)
        
    }

    if(loader === false){
        return(<>
            {pageList.length > 0 && <table className={styles['table']}>
                <tbody>
                <tr className={styles['tableRowHeader']}>
                    <th className={styles['tableHeader']}>Owner</th>
                    <th className={styles['tableHeader']}>Homepage</th>
                    <th className={styles['tableHeader']}>Id</th>
                    <th className={styles['tableHeader']}>Language</th>
                </tr>
                {pageList && pageList.map((obj)=>{
                    return (
                    <tr key={obj.id} className={styles['tableRow']}>
                        <td className={styles['tableDown']}>{obj.name}</td>
                        <td className={styles['tableDown']}><a href={obj.homepage}>{obj.homepage}</a></td>
                        <td className={styles['tableDown']}><a href={obj.html_url}>{obj.id}</a></td>
                        <td className={styles['tableDown']}>{obj.language}</td>
                    </tr>)
                })}
                </tbody>
            </table>}
        
        <input type="button" id="first" onClick={firstPage} value="<<" />
        <input type="button" id="previous" onClick={previousPage} value="<" />
        <span className={styles['inputPage']}> page: <input className={styles['writeInput']} type="text" id="writeInput" onChange={onChange} placeholder={currentPage} /> of {numberOfPages}</span>
        <input type="button" id="next" onClick={nextPage} value=">" />
        <input type="button" id="last" onClick={lastPage} value=">>" />
        
        </>)
    }
    if(loader){
        return LoadingSpinner()
    }
    
}

export default RepoPanel