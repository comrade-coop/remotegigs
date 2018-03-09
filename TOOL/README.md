# Remotegigs

This tool executes through the npm command-line tool. The npm command-line tool is bundled with Node.js. If you have it installed, then you already have npm. If not, download Node.js for your platform [here](https://nodejs.org/en/download/)

You will also need an account in https://www.npmjs.com. When you sign up, don’t forget to verify your email!

## Install and Use of Remotegigs

Run the npm command-line tool on your platform and type the following command

```npm install -g remotegigs```

![alt tag](https://github.com/comrade-coop/remotegigs/blob/master/screenshots/install-remotegigs.png)

### To see all offers without filters run

```remotegigs --nf```

### To see all available filters run

```remotegigs --listlabels```

### To see specific offer run

```remotegigs --id ###```, where ### is the number of the offer

for example ```remotegigs --id 001``` for the first offer

### To see all offers with your filters

```remotegigs```

[WIP]How to use the filter
The filter is set by criteria.yaml in the directory. It is separated in two groups includesAll and includesAny, as follows the first one will filter by all the criterias, while the second one - by any of them.
Group 1 filters by all of these (first AND second AND third ...)
includesAll: - 'front-end' - 'full-stack'
Group 2 filters additional by any of these (first OR second OR third..)
includesAny: - 'front-end' - 'c#'


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

