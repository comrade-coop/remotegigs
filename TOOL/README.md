# Remotegigs

This tool executes through the npm command-line tool. The npm command-line tool is bundled with Node.js. If you have it installed, then you already have npm. If not, download Node.js for your platform [here](https://nodejs.org/en/download/)

You will also need an account in https://www.npmjs.com. When you sign up, don’t forget to verify your email!

## 1. Install and Use of Remotegigs

Run the npm command-line tool on your platform and type the following command

```npm install -g remotegigs```

### 2. To see all offers with no filters applied

```remotegigs --nf```

![alt tag](https://github.com/comrade-coop/remotegigs/blob/master/screenshots/all-offers-npm.png)

### 3. To see all available filters run

```remotegigs --listlabels```

[WIP]How to use the filter
The filter is set by criteria.yaml in the directory. It is separated in two groups includesAll and includesAny, as follows the first one will filter by all the criterias, while the second one - by any of them.
Group 1 filters by all of these (first AND second AND third ...)
includesAll: - 'front-end' - 'full-stack'
Group 2 filters additional by any of these (first OR second OR third..)
includesAny: - 'front-end' - 'c#'

### 4. To see specific offer run

```remotegigs --id ###```, where ### is the number of the offer

for example ```remotegigs --id 001``` for the first offer

### 5. To see all offers with your filters applied

```remotegigs```

