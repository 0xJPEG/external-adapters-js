import { Requester, Validator, AdapterError } from '@chainlink/ea-bootstrap'
import { Config, ExecuteWithConfig } from '@chainlink/types'
import { APPLICATION_JSON, CALLBACK_URL, CONTENT_TYPE, DEFAULT_SECRET_ID, RAINFALL_URL, X_API_KEY, X_API_KEY_VALUE } from '../config'

export const NAME = 'rainfall'

const customError = (data: any) => data.Response === 'Error'

export const execute: ExecuteWithConfig<Config> = async (request, config) => {
    const validator = new Validator(request)
    if (validator.error) throw validator.error
    const jobRunID = validator.validated.id
    const options = {
        ...config.api,
        params: getApiParams(validator),
        url: RAINFALL_URL,
        headers: getApiHeaders()
    }
    try {
        const response = await Requester.request(options, customError)
        return {
            ...Requester.success(jobRunID, response, config.verbose),
            pending: true
        }
    } catch (e) {
        const error = new AdapterError({
            jobRunID,
            message: `There was an error ${e}`,
            statusCode: 500,
        })
        return {
            ...Requester.errored(jobRunID, error),
            pending: false
        }
    }
}

interface IDictionary {
    [T: string]: any
}

const getApiHeaders = (): IDictionary => {
    return {
        [X_API_KEY]: X_API_KEY_VALUE,
        [CONTENT_TYPE]: APPLICATION_JSON
    }
}

const getApiParams = (validator: any): IDictionary => {
    const requestObj: IDictionary = {
        data: {}
    }
    if (validator.data) {
        for (const param of Object.keys(validator.data)) {
            const paramValue = isFloat(validator.data[param]) ? parseFloat(validator.data[param]) : validator.data[param]
            requestObj.data[param] = paramValue
        }
    }
    requestObj.data.secret = validator.data.id || DEFAULT_SECRET_ID
    requestObj.data.callback_url = CALLBACK_URL
    return requestObj
}

const isFloat = (num: any): boolean => Number(num) === num && num % 1 !== 0;