# Remotegigs

This tool executes through the npm command-line tool. The npm command-line tool is bundled with Node.js. If you have it installed, then you already have npm. If not, download Node.js for your platform [here](https://nodejs.org/en/download/).

You will also need an account in https://www.npmjs.com. When you sign up, don’t forget to verify your email!

## 1. Installing the Remotegigs tool

Run the npm command-line tool on your platform and type the following command

```npm install -g remotegigs```

### 2. To see all offers with no filters applied

```remotegigs --nf```

![alt tag](https://github.com/comrade-coop/remotegigs/blob/master/screenshots/all-offers-npm.png)

### 3. How to filter the offers

The filter is set by [criteria.yaml](https://github.com/comrade-coop/remotegigs/blob/master/TOOL/criteria.yaml) in the tool's directory.The filter is separated by two groups: 

includesAll and includesAny

The result in the command line tool is the combined one from both groups. You can comment with "#" any of the labels you do not want to use.

*Example:

**includesAll**: 

  - 'Frontend' 
  - 'Angular'

**includesAny**:

  - 'Full Stack'
  - 'C++'

![alt tag](https://github.com/comrade-coop/remotegigs/blob/master/screenshots/filtered-offers.png)

### 4. To see all available filters run

```remotegigs --listlabels```

or visit the [labels list](https://github.com/comrade-coop/remotegigs/labels) in this repository.

### 5. To see a specific offer run

```remotegigs --id ###```, where ### is the number of the offer.

For example ```remotegigs --id 001``` for the first offer

![alt tag](https://github.com/comrade-coop/remotegigs/blob/master/screenshots/single-offer.png)

### 6. To see all offers with your filters applied

```remotegigs```

