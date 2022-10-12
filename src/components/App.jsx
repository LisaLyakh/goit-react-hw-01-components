import { Profile } from './Profile/Profile';
import userProfile from './Profile/user.json';
import { StatisticsList } from './Statistic/StatisticsList';
import StatisticsData from './Statistic/data.json';
import { FriendList } from './FriendList/FriendList';
import FriendListData from './FriendList/friends.json';
import { TransactionList } from './TransactionHistory/TransactionList';
import TransactionData from './TransactionHistory/transactions.json';

export const App = () => {
  return (
    <>
      <Profile profile={userProfile} />
      <StatisticsList title="Upload stats" StatisticsData={StatisticsData} />
      <FriendList FriendListData={FriendListData} />
      <TransactionList TransactionData={TransactionData} />
    </>
  );
};
