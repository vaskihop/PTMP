package lt.vtmc.projectTaskManagement.repository;

import java.util.List;

import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;

import lt.vtmc.projectTaskManagement.model.ProjectEntity;

public interface ProjectRepository extends PagingAndSortingRepository<ProjectEntity, Long> {

	List<ProjectEntity> findProjectEntityByProjectTitleContainsIgnoreCase(String title, Pageable pageable);
}
