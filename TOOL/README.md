# Remotegigs

## To intall the global modul, run this command in the folder 
`npm install remotegigs`

## To see all offers filtrated run
`remotegigs`

## To see all offers without filter run
` remotegigs --nf `

## To see specific offer run
`remotegigs --id ###`, for example `remotegigs --id 291` where ### is the number of the offer

## How to use the filter
The filter is set by criteria.yaml in the directory. It is separated in two groups `includesAll` and `includesAny`, as follows 
the first one will filter by all the criterias, while the second one - by any of them.

## Group 1 filters by all of these (first AND second AND third ...)
includesAll:
     - 'front-end'
     - 'full-stack'

## Group 2 filters additional by any of these (first OR second OR third..)
includesAny:
     - 'front-end'
     - 'c#'

