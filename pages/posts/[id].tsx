import { useRouter } from "next/router";
import PostPageContainer from "../../containers/PostPageContainer";

export default () => {
  const router = useRouter();
  const { id } = router.query;

  return <PostPageContainer id={id} />;
};
