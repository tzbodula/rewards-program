import React from 'react'

function calculateRewardPoints(dollarAmount) {
    let trimmedDollarAmount = dollarAmount.substring(1, 4);
    let dollarAsInteger = Number.parseInt(trimmedDollarAmount)

    let rewardPoints = 0

    if (dollarAsInteger > 100) {
      let dollarsOver100 = dollarAsInteger - 100
      rewardPoints = rewardPoints + (dollarsOver100 * 2);
    }

    if (dollarAsInteger > 50) {
      if(dollarAsInteger >= 100) {
        rewardPoints = rewardPoints + 50;
      } else {
        let dollarsOver50 = dollarAsInteger - 50
        rewardPoints = rewardPoints + (dollarsOver50 * 1);
      }
    }
 
    return rewardPoints
}

function CustomerRow ({index, name, email, jan, feb, march,}) {
    return (
      <>
          <tr key={index} className='m-4'>
              <td className='text-slate-200'>{name}</td>
              <td className='text-slate-200'>{email}</td>
              <td className='text-slate-200'>{jan}</td>
              <td className='text-slate-200'>{feb}</td>
              <td className='text-slate-200 m-4'>{march}</td>
              <td className='text-slate-200'>{calculateRewardPoints(jan)} Points</td>
              <td className='text-slate-200'>{calculateRewardPoints(feb)} Points</td>
              <td className='text-slate-200'>{calculateRewardPoints(march)} Points</td>
              <td className='text-slate-200 uppercase italic font-bold'>{calculateRewardPoints(jan) + calculateRewardPoints(feb) + calculateRewardPoints(march)} Points</td>
          </tr>
      </>
    )
}

export default CustomerRow 

