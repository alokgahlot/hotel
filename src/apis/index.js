import { makeApiCall } from "./apicall"
import { URLS } from "./endpoints"

export const ApiFunctions={
    doLogin(params){
       return makeApiCall(URLS.login,'POST',params)
    },
    doRegister(params){
        return makeApiCall(URLS.register,'POST', params)
    }
}