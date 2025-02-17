import { get_github_repository } from './requisitions';

const repository = get_github_repository('https://api.github.com/repos/RPCS3/rpcs3');
console.log(repository);